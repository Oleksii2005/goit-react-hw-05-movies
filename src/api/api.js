// a4d1120350c665aad10b441227c13583

import axios from 'axios';
const API_KEY = 'a4d1120350c665aad10b441227c13583';

async function fetchData(query, page) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=12&page=${page}
    &orientation=horizontal&safesearch=true`;
  const res = await axios.get(url);
  return res.data;
}
export { fetchData };
