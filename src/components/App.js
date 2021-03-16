import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Header from './header/Header';
import Show from './show/Show';
import Search from './search/Search';

const MOVIE_API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';
//const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=19ec4ff7';
const MOVIE_API_KEY = '1a09dcf42c6c621e5b547c2f53c489b3';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((res) => {
      const shows = res.data.results;
      setShows(shows);
      setLoading(false);
    });
  }, []);

  // const search = (searchValue) => {
  //   setLoading(true);
  //   setErrorMessage(null);

  //   fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       if (jsonResponse.Response === 'True') {
  //         setShows(jsonResponse.Search);
  //         setLoading(false);
  //       } else {
  //         setErrorMessage(jsonResponse.Error);
  //         setLoading(false);
  //       }
  //     });
  // };

  console.log(shows);

  return (
    <div className="App">
      <Header text="Shows Database" />

      <p className="App-intro">Sharing a few of our favourite shows</p>
      <div className="shows">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          shows.map((show, index) => <Show key={`${index}-${show.Title}`} show={show} />)
        )}
      </div>
    </div>
  );
};

export default App;
