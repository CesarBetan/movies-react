import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { buildUrl } from '../../utils/api';
import ShowCard from '../showCard/ShowCard';

const Shows = ({ title, endpoint }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [sortName, setSortName] = useState(false);
  const [sortUpvotes, setSortUpvotes] = useState(false);
  const url = buildUrl(endpoint);

  useEffect(() => {
    const getShows = async () => {
      const newShows = await axios.get(url);
      const showsRes = newShows.data.results;
      setShows(showsRes);
      setLoading(false);
    };
    getShows();
  }, [url, sortName, sortUpvotes]);

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
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          <div className="show-row">
            <div className="show-image-detail-9">
              <h2 className="shows-title">{title}</h2>
            </div>
            <div className="show-image-detail-3">
              <button
                className={`show-label-det shows-filters ${sortName ? 'active-filter ' : ''}`}
                onClick={sortbyName}
              >
                Sort by Name
              </button>
              <button
                className={`show-label-det shows-filters ${sortUpvotes ? 'active-filter ' : ''}`}
                onClick={sortbyUpvotes}
              >
                Sort by Calfication
              </button>
            </div>
          </div>
          <div className="shows-slider-complete">
            <div className="label-with-tumbs-complete">
              {sortName
                ? shows
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((show) => <ShowCard key={show.id} show={show} />)
                : sortUpvotes
                ? shows
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .map((show) => <ShowCard key={show.id} show={show} />)
                : shows.map((show) => <ShowCard key={show.id} show={show} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shows;
