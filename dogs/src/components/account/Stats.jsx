import React from "react";
import Head from "../helper/Head";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
const StatsGraph = React.lazy(() => import("./StatsGraph"))

const Stats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <StatsGraph data={data} />
      </React.Suspense>
    );
    else return null
};

export default Stats;
