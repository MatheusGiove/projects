import { useEffect, useRef, useState } from "react";
import styles from "./Container.module.css";
import Image from "../Image/Image";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type ContainerProps = {
  data: ResultsGetFilmsInterface[] | undefined;
  title: string;
};

const Container = ({ data, title }: ContainerProps) => {
  const tamanho = Math.round(window.innerWidth / 2);
  const lista = useRef<HTMLLIElement | null>(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    if (lista.current) {
      const scrollTotal = lista.current.scrollWidth;
      setTotalWidth(scrollTotal);
    }
  }, []);

  function prev() {
    let x = margin + tamanho;
    if (x > 0) {
      x = 0;
    }
    setMargin(x);
  }

  function next() {
    let x = margin - tamanho;
    if ((window.innerWidth - totalWidth) > x) {
      x = (window.innerWidth - totalWidth) - 76;
    }
    setMargin(x);
  }

  if (data)
    return (
      <div className={styles.container}>
        <h1>{title}</h1>
        <ul className={styles.moviesList}>
          <li
            className={styles.list}
            ref={lista}
            style={{ marginLeft: margin }}
          >
            {data.map((movie) => (
              <Image
                className={styles.movie}
                alt={movie.original_title}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
          </li>
          <div onClick={prev} className={styles.navBefore}>
            <NavigateBeforeIcon fontSize="large" />
          </div>
          <div onClick={next} className={styles.navNext}>
            <NavigateNextIcon fontSize="large" />
          </div>
        </ul>
      </div>
    );
};

export default Container;
