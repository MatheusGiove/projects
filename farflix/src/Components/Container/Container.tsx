import React from "react";
import styles from "./Container.module.css";
import Image from "../Image/Image";

type ContainerProps = {
  data: {
    data: GetFilmsInterface | null;
    loading: boolean;
    erro: string | null
  };
  title: string
};

const Container = ({ data, title }: ContainerProps ) => {
  if (data.data)
    return (
      <div className={styles.container}>
        <h1>{title}</h1>
        <ul className={styles.moviesList}>
          {data.data.results.map(movie => (
            <Image 
              className={styles.movie}
              alt={movie.original_title}
              key={movie.id} 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </ul>
      </div>
    );
};

export default Container;
