import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import styles from "./Champions.module.css";

const Champions = () => {
  const { champions, loading, setLoading, error } = React.useContext(GlobalContext);
  const [search, setSearch] = React.useState("");
  const [filteredChampions, setFilteredChampions] = React.useState([]);

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [setLoading])

  React.useEffect(() => {
    const filter = champions.filter((champion) => {
      const regex = new RegExp(search, "gi");
      return champion.id.match(regex);
    });
    setFilteredChampions(filter);
  }, [search, champions]);

  if (loading) {
    return (
      <>
        <section className="loading">
          <div></div>
        </section>
      </>
    );
  }
  if (error) {
    return (
      <>
        <section className="loading">
          <p style={{ color: "#fff" }}>
            Erro {error}. Tente atualizar a página
          </p>
          ;
        </section>
      </>
    );
  }
  if (!filteredChampions || !champions) return null;
  return (
    <article>
      <nav>
        <form
          className={styles.navBar}
          onSubmit={(e) => e.preventDefault()}
          style={{ margin: "20px" }}
        >
          <input
            className={styles.searchBar}
            type="text"
            name="champion"
            id="champion"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </form>
      </nav>
      <ul className={styles.list}>
        {filteredChampions.map(({ name, id }) => (
          <li id={name} className={styles.card} key={id}>
            <Link to={`/champion/${id}`}>
              <h1 className={styles.title}>{name}</h1>
              <img
                className={styles.image}
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
                alt={id}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Champions;
