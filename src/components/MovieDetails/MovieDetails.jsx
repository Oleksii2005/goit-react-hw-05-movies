import { movieDetails } from "api/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const MovieDetails = () => {
    const [movieDetail, setMovieDetail] = useState([])
     useEffect(() => {
    // Assuming movieDetails is a function that takes a movieId as a parameter
    movieDetails() // Provide the movieId as an argument here
      .then((movieDetail) => {
        setMovieDetail(movieDetail);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, []);
    return(
        
      <div>
        
      </div>
    )
}

export default MovieDetails