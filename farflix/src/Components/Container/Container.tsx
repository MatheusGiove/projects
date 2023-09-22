import React from "react";
import styles from "./Container.module.css";
import Image from "../Image/Image";

type ContainerProps = {
  data: GetFilms | undefined;
  url?: string;
  title: string;
};

const Container = ({ data, title }: ContainerProps) => {
  if (data)
    return (
      <div className={styles.container}>
        <h1>{title}</h1>
        <ul className={styles.moviesList}>
          {data.results.map((movie) => (
            <Image className={styles.movie} key={movie.id} alt={movie.original_name} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          ))}
        </ul>
      </div>
    );
};

export default Container;
