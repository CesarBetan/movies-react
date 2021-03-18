const api = 'https://api.themoviedb.org/3/movie/';

const buildUrl = (endpoint) => {
  const url = `${api}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  return url;
};

const buildUrlMovie = (movieId) => {
  const url = `${api}${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  return url;
};

const buildUrlMovieRecomend = (movieId) => {
  const url = `${api}${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  return url;
};

export { buildUrl, buildUrlMovie, buildUrlMovieRecomend };
