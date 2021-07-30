import * as api from '../utils/api';

export const getMovies = async () => {
  return await api.get(`/movies.json`);
};
