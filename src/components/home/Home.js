import React from 'react';
import Shows from '../showsSlider/ShowsSlider';
import { buildUrl } from '../../utils/api';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Shows titleShows={'Popular'} movieApiUrl={buildUrl('popular')} endpoint={'popular'} />
      <Shows titleShows={'Top Rated'} movieApiUrl={buildUrl('top_rated')} endpoint={'top_rated'} />
      <Shows
        titleShows={'Now Playing'}
        movieApiUrl={buildUrl('now_playing')}
        endpoint={'now_playing'}
      />
    </div>
  );
};

export default Home;
