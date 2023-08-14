// a4d1120350c665aad10b441227c13583

import axios from 'axios';
const API_KEY = 'a4d1120350c665aad10b441227c13583';

async function getTranding(){
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key="${API_KEY}"`;
    const res = await axios.get(url);
    return res.data.results;
}
async function getMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key="${API_KEY}"&query="${query}"`;
    const res = await axios.get(url);
    return res.data.results;
}
  async function getMovieById(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key="${API_KEY}"`;
    const res = await axios.get(url);
    return res.data;
}