import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMoviesData = () => {
  const { data } = axios.get(`/trending/movie/day?language=en-US`);

  return data;
};
