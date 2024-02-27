import { useEffect, useState } from "react";
import { instance, requests } from "./utils/axios";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { MovieData } from "./components/type/Types";

function App() {
  const [data, setData] = useState([] as MovieData[]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(requests.fetchAll);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </>
  );
}

export default App;
