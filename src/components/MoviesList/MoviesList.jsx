import React, { useEffect, useState } from 'react';
import { getTrending } from 'api/api';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    // const [error, setError] = useState(null)
    useEffect(()=>{
        getTrending()
        .then(movies =>{
            setMovies(movies);
        })
    }, [])
  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`}>{movie.title}</Link> 
          </li>
        ))}
      </ul>
    </div>
  )
};

export default MoviesPage;
