import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Lore from "./ChampionSections/Lore";
import Slide from "./ChampionSections/Slide";
import Title from "./ChampionSections/Title";
import Head from "../Head";
import Hability from "./ChampionSections/Hability";

const Champion = () => {
  const { champion } = useParams();
  const { loading, setLoading, error, setError, currentVersion } =
    React.useContext(GlobalContext);
  const [currentChampion, setCurrentChampion] = React.useState(null);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    async function fetchChampion(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setCurrentChampion(json.data[champion]);
      } catch (e) {
        console.error(`Error fetching data: ${e}`);
        setError(`Erro: ${e}`);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    }
    fetchChampion(
      `https://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/pt_BR/champion/${champion}.json`
    );
  }, [champion, setLoading, setError, currentVersion]);

  function handleTitleImageLoad() {
    setImageLoaded(true);
  }

  if (loading && !imageLoaded) {
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
  if (!currentChampion) return null;
  return (
    <article className="App">
      <Head
        title={`Campeão | ${currentChampion.name}`}
        description={`Todas informações sobre o campeão ${currentChampion.name}`}
      />
      <Title champion={currentChampion} onImageLoad={handleTitleImageLoad} />
      {imageLoaded && (
        <>
          <Lore champion={currentChampion} />
          <Slide champion={currentChampion} />
          <Hability champion={currentChampion} />
        </>
      )}
    </article>
  );
};

export default Champion;
