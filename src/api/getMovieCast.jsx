import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'cd3a26d9a871d2dca8f48d979a7b2f5d';

export const getMovieCast = movieId => {
  return axios(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};
