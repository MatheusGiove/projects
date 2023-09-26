import { useEffect, useState } from "react";
import styles from "./Principal.module.css";
import useData from "../../Hooks/useData";
import Tmdb from "../../Services/Tmdb";
import { Link } from "react-router-dom";

const Principal = () => {
  const { movies, language } = useData();
  const [destaque, setDestaque] = useState<PrincipalInterface | null>(null);

  useEffect(() => {
    const array = movies?.filter((item) => item.tema === "originals")[0].items
      ?.results;
    if (array) {
      const randomNumber = Math.floor(Math.random() * array.length - 1);
      const chosenMovie = array[randomNumber];
      const LoadDestaque = async () => {
        const movie = await Tmdb.useMovieInfo(chosenMovie.id, "tv", language);
        console.log(movie);
        setDestaque(movie);
      };
      LoadDestaque();
    }
  }, [movies, language]);

  if (destaque)
    return (
      <section
        style={{
          backgroundPosition: "top rigth",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${destaque?.backdrop_path}")`,
        }}
      >
        <div className={styles.vertical}>
          <div className={styles.horizontal}>
            <div className={styles.content}>
              <h1 className={styles.title}>{destaque.name}</h1>
              <div className={styles.infos}>
                <ul className={styles.subInfos}>
                  <li className={styles.note}>
                    {destaque.vote_average.toFixed(1)}
                  </li>
                  <li className={styles.date}>
                    {destaque.first_air_date.split("-")[0]}
                  </li>
                  <li className={styles.temps}>
                    {destaque.number_of_seasons}
                    {destaque.number_of_seasons !== 1
                      ? " Temporadas"
                      : " Temporada"}
                  </li>
                </ul>
                <p className={styles.overview}>{destaque.overview}</p>
                <Link to="" className={styles.showMore}>
                  Ver mais...
                </Link>
                <div className={styles.buttons}>
                  <button className={styles.watch}>Assistir</button>
                  <Link to="" className={styles.information}>
                    Mais informações
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Principal;
