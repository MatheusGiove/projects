import Loading from "../../Helper/Loading";
import Container from "../../Components/Container/Container";
import Principal from "../../Components/Principal/Principal";
import useData from "../../Hooks/useData";

const Home = () => {
  const { movies } = useData();
  if (!movies) return <Loading />;
  return (
    <>
      <Principal />
      {movies.map((movie) => (
        <Container
          key={movie.tema}
          data={movie.items?.results.map((item) => item)}
          title={movie.title}
        />
      ))}
    </>
  );
};

export default Home;
