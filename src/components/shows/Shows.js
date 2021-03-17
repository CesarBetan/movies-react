import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { buildUrl } from '../../utils/api';
import Show from '../show/Show';

const Shows = ({ title, endpoint }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const url = buildUrl(endpoint);

  useEffect(() => {
    axios.get(url).then((res) => {
      const shows = res.data.results;
      setShows(shows);
      setLoading(false);
    });
  }, [url]);

  return (
    <div className="shows-slider-complete">
      <h2 className="shows-title">{title}</h2>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div className="label-with-tumbs-complete">
          {shows.map((show, index) => (
            <Show key={`${index}-${show.Title}`} show={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shows;
