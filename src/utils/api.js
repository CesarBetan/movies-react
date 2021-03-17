const api = 'https://api.themoviedb.org/3/movie/';

const buildUrl = (endpoint) => {
  const url = `${api}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  console.log(url);
  return url;
};

export { buildUrl };
