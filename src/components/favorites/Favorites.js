import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ls from 'local-storage';
import { buildUrlMovie } from '../../utils/api';
import ShowCard from '../showCard/ShowCard';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const favorites = ls.get('favorites') || [];

  useEffect(() => {
    const runGetFavorites = async () => {
      const newShows = await Promise.all(
        favorites.map(async (favorite) => {
          return axios.get(buildUrlMovie(favorite));
        }),
      );
      const data = newShows.map((show) => {
        return show.data;
      });
      setShows(data);
      setLoading(false);
    };
    runGetFavorites();
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <div>
            <h2 className="shows-title">My Favorites</h2>
          </div>
          <div className="shows-slider-complete">
            <div className="label-with-tumbs-complete">
              {shows && shows.map((show) => <ShowCard key={show.id} show={show} />)}
            </div>
          </div>
        </div>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
};

export default Favorites;
