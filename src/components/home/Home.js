import React from 'react';
import ShowsSlider from '../showsSlider/ShowsSlider';
import { buildUrl } from '../../utils/api';

/**
 * Represents a view for the home of the website where it uses ShowsSlider, to display
 * a glance of popular, top rated, and now playing shows.
 *
 * @component
 * return (
 *   <Home />
 * )
 */
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
