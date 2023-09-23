import Loading from "../../Helper/Loading";
import Container from "../../Components/Container/Container";
import Principal from "../../Components/Principal/Principal";
import useData from "../../Hooks/useData";

const Home = () => {
  const { movies, language } = useData();
  if (movies.length === 0) return <Loading />;
  return (
    <>
      <Principal language={language} />
      {movies.map((movie) => (
        <Container key={movie.tema} data={movie.items} title={movie.title}/>
      ))}
      
    </>
  );
};

export default Home;
