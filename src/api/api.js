// a4d1120350c665aad10b441227c13583

import axios from 'axios';
const API_KEY = 'a4d1120350c665aad10b441227c13583';

async function getTrending(){
  const url =`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const res = await axios.get(url);
  return res.data.results;
}
async function searchMovies(query){
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  const res = await axios.get(url);
  return res.data.results;
}
async function movieDetails(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  const res = await axios.get(url);
  return res.data;
}
async function getMovieCredits(movieId) {
  
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.cast;
  
}


// Функція для отримання оглядів фільму за його ідентифікатором
async function getMovieReviews(movieId) {
  
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  }

export {getTrending,searchMovies,movieDetails,getMovieCredits, getMovieReviews}