import useFetch from "../../Hooks/useFetch";
import styles from "./Principal.module.css";
import { options } from "../../Services/Tmdb";

const Principal = ({ language }: { language: string }) => {
  const fetchToprated = useFetch(
    `https://api.themoviedb.org/3/trending/all/week?language=${language}`,
    options
  );

  return (
    <section style={{ backgroundImage: "" }}>
      <div className={styles.principal}>Opa</div>
    </section>
  );
};

export default Principal;
