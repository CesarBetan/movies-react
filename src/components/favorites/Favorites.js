import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ls from 'local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildUrlMovie } from '../../utils/api';
import ShowCard from '../showCard/ShowCard';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [sortName, setSortName] = useState(false);
  const [sortUpvotes, setSortUpvotes] = useState(false);
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

  const sortbyName = () => {
    setSortName(!sortName);
    if (sortUpvotes) {
      setSortUpvotes(false);
    }
  };
  const sortbyUpvotes = () => {
    setSortUpvotes(!sortUpvotes);
    if (sortName) {
      setSortName(false);
    }
  };

  return (
    <div>
      {!loading ? (
        <div>
          <div className="show-row">
            <div className="show-image-detail-9">
              <h2 className="shows-title">My Favorites</h2>
            </div>
            <div className="show-image-detail-3">
              <button
                className={`show-label-det shows-filters ${sortName ? 'active-filter ' : ''}`}
                onClick={sortbyName}
              >
                <FontAwesomeIcon icon="sort-alpha-down" className="my-icons" />
                Sort by Name
              </button>
              <button
                className={`show-label-det shows-filters ${sortUpvotes ? 'active-filter ' : ''}`}
                onClick={sortbyUpvotes}
              >
                <FontAwesomeIcon icon="sort-numeric-down-alt" className="my-icons" />
                Sort by Calfication
              </button>
            </div>
          </div>
          <div className="shows-slider-complete">
            <div className="label-with-tumbs-complete">
              {sortName && shows
                ? shows
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((show) => <ShowCard key={show.id} show={show} />)
                : sortUpvotes && shows
                ? shows
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .map((show) => <ShowCard key={show.id} show={show} />)
                : shows.map((show) => <ShowCard key={show.id} show={show} />)}
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
