import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { useSearchParams } from "react-router-dom";
import {useState, useEffect, useCallback} from 'react'
import { SearchBox } from "../components/SearchBox/SearchBox.jsx";
import { getMovies } from "../api/api";
import { MoviesList } from "../components/MoviesList/MoviesList.jsx";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
    const query = searchParams.get("query") ?? "";
  const onError = err => Notiflix.Notify.failure(err.message)
  
  const fetchMovies = useCallback(async () => {
    try {
      const result = await getMovies(query)
      if (!result) throw new Error("Sorry, no data movies.");
      setMovies(result)
    } catch (error) {
      onError(error)
    };
  }, [query])

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
   fetchMovies()
  }, [fetchMovies]);

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {movies.length>0 && <MoviesList movies={movies} />}
     </main>
  );
};

export default Movies;
