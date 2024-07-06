import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      refetchInterval: false, // default value. the oricess of fetching data of regular intervals (to get up to date on time)
      refetchIntervalInBackground: false, // default value, polling/ automatic fetching is paused when window lose focus,So set "true" to continue fetching
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
};
