import Loading from "../../Helper/Loading";
import Container from "../../Components/Container/Container";
import Principal from "../../Components/Principal/Principal";
import useData from "../../Hooks/useData";

const Home = () => {
  const { data } = useData()

  if (!data) return <Loading />;
  return (
    <>
      <Principal />
      {data.map(({ items, title, url }) => (
        <Container key={title} data={items} title={title} url={url} />
      ))}
    </>
  );
};

export default Home;
