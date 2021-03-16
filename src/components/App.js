import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Header from './header/Header';
import Shows from './shows/Shows';
import Search from './search/Search';

const MOVIE_API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';
const MOVIE_API_URL_2 =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';
const MOVIE_API_URL_3 =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';

const App = () => {
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

  return (
    <div className="App">
      <Header text="Shows Database" />
      <div className="home-wrapper">
        <Shows titleShows={'Popular'} movieApiUrl={MOVIE_API_URL} />
        <Shows titleShows={'Top Rated'} movieApiUrl={MOVIE_API_URL_2} />
        <Shows titleShows={'Now Playing'} movieApiUrl={MOVIE_API_URL_3} />
      </div>
    </div>
  );
};

export default App;
