import { useEffect, useState } from "react";
import getDatabase from "../../Services/Tmdb";
import Loading from "../../Helper/Loading";
import Container from "../../Components/Container/Container";

const Home = () => {
  const [data, setData] = useState<Database[] | null>(null);

  useEffect(() => {
    const data = async () => {
      const films = await getDatabase("pt-BR");
      setData(films);
    };
    data();
  }, []);

  console.log(data);

  if (!data) return <Loading />;
  return <>{data.map(({items, title, url}) => (
    <Container data={items} title={title} url={url} />
  ))}</>;
};

export default Home;
