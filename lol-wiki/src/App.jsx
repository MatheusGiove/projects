import React from "react";
import Champions from "../components/Champions";
import "./App.css";

function App() {
  const [champions, setChampions] = React.useState([]);

  React.useEffect(() => {
    async function fetchChampions() {
      try {
        const response = await fetch(
          `http://ddragon.leagueoflegends.com/cdn/13.14.1/data/pt_BR/champion.json`
        );
        const json = await response.json();
        setChampions(Object.values(json.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchChampions();
  }, []);
  
  console.log(champions)

  return (
    <>
      <ul className="c-champions__list">
        <Champions infos={champions} />
      </ul>
    </>
  );
}

export default App;
