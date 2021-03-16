import React, { useState, useEffect } from 'react';
import '../App.css';
import Shows from './shows/Shows';

const MOVIE_API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';
const MOVIE_API_URL_2 =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';
const MOVIE_API_URL_3 =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';

const App = () => {
  return (
    <div className="App">
      <div className="home-wrapper">
        <Shows titleShows={'Popular'} movieApiUrl={MOVIE_API_URL} />
        <Shows titleShows={'Top Rated'} movieApiUrl={MOVIE_API_URL_2} />
        <Shows titleShows={'Now Playing'} movieApiUrl={MOVIE_API_URL_3} />
      </div>
    </div>
  );
};

export default App;
