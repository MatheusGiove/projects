import React from "react";

export const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [champions, setChampions] = React.useState([]);
  const [versions, setVersions] = React.useState([]);
  const [currentVersion, setCurrentVersion] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Faz o fetch das versões existentes no game
  // E retorna uma lista com os últimos 50 patchs
  // É executado apenas uma vez, na renderização do componente
  React.useEffect(() => {
    async function fetchVersion(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const filter = json.slice(0, 50)
        setVersions(filter);
      } catch (e) {
        setError(`Error ${e}`);
      }
    }
    fetchVersion("https://ddragon.leagueoflegends.com/api/versions.json");
  }, []);

  // Pega a versão mais recente do patch e manda ela para o currentVersion
  React.useEffect(() => {
    const latestVersion = versions[0];
    setCurrentVersion(latestVersion);
  }, [versions]);

  // Quando o currentVersion receber a versão mais recente
  // Faz um patch para pegar as informações do
  React.useEffect(() => {
    async function fetchChampions() {
      if (currentVersion) {
        try {
          setLoading(true);
          const response = await fetch(
            `http://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/pt_BR/champion.json`
          );
          const json = await response.json();
          setChampions(Object.values(json.data));
        } catch (e) {
          console.error(`Error fetching data: ${e}`);
          setError(`Erro: ${e}`);
        } finally {
          setTimeout(() => {
            setLoading(false)
          }, 200);
        }
      }
    }
    fetchChampions();
  }, [currentVersion]);

  return (
    <GlobalContext.Provider
      value={{
        champions,
        setChampions,
        versions,
        setVersions,
        currentVersion,
        setCurrentVersion,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
