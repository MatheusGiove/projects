import React from "react";
import "./App.css";

function App() {
  const [page, setPage] = React.useState(1);
  const [films, setFilms] = React.useState(null);

  React.useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTllOTBjZDg3MWE2OWQ0ODRjOTg2Y2VlMTJiYzhmMiIsInN1YiI6IjY0ZWNjNDZiYzNjODkxMDExZGEwMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W3zTCbJskeS-FYuDo5RrYGi_n8KxZFmyueFsDuYr2D4",
      },
    };

    async function getFilms() {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        setFilms(json);
      } catch {
        console.log("error");
      }
    }
    getFilms();
  }, [page]);

  return (
    <>
      {films && (
        <ul>
          {films.results.map((filme) => (
            <li key={filme.id}>
              <p>{filme.title}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} />
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setPage(page - 1)}>-</button>
      <button onClick={() => setPage(page + 1)}>+</button>
    </>
  );
}

export default App;
