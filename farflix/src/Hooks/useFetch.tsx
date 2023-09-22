import { useState, useEffect, useRef } from "react";

function useFetch<T>({ url, options }: { url: string; options?: RequestInit }) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      setErro(null);
      setData(null);
      setLoading(true);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (e) {
        if (!signal.aborted && e instanceof Error)
          setErro(`Erro: ${e.message}`);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);

  return {
    data,
    loading,
    erro,
  };
}

export default useFetch;
