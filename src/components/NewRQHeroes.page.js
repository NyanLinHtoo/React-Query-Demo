import { useNewSuperHeroesData } from "../hooks/useNewSuperHeroesData";

export const NewRQHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, refetch, isFetching } =
    useNewSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) return <h2>Loading..</h2>;

  if (isError) return <h3>{error.message}</h3>;
  return (
    <>
      <h2>New RQ Heroes</h2>
      <button onClick={refetch}>Fetch Data</button>
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};
