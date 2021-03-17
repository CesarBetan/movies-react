import React, { useState, useEffect } from 'react';
import '../App.css';
import Shows from './shows/Shows';
import { buildUrl } from '../utils/api';

const App = () => {
  return (
    <div className="App">
      <div className="home-wrapper">
        <Shows titleShows={'Popular'} movieApiUrl={buildUrl('popular')} />
        <Shows titleShows={'Top Rated'} movieApiUrl={buildUrl('top_rated')} />
        <Shows titleShows={'Now Playing'} movieApiUrl={buildUrl('now_playing')} />
      </div>
    </div>
  );
};

export default App;
