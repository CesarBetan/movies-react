import React from 'react';
import ShowsSlider from '../showsSlider/ShowsSlider';
import { buildUrl } from '../../utils/api';

const Home = () => {
  return (
    <div className="home-wrapper">
      <ShowsSlider
        titleShows={'Popular'}
        movieApiUrl={buildUrl('popular')}
        endpoint={'popular'}
        viewOn={true}
      />
      <ShowsSlider
        titleShows={'Top Rated'}
        movieApiUrl={buildUrl('top_rated')}
        endpoint={'top_rated'}
        viewOn={true}
      />
      <ShowsSlider
        titleShows={'Now Playing'}
        movieApiUrl={buildUrl('now_playing')}
        endpoint={'now_playing'}
        viewOn={true}
      />
    </div>
  );
};

export default Home;
