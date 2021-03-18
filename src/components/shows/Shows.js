import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { buildUrl } from '../../utils/api';
import ShowCard from '../showCard/ShowCard';

const Shows = ({ title, endpoint }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const url = buildUrl(endpoint);

  useEffect(() => {
    axios.get(url).then((res) => {
      const showsRes = res.data.results;
      setShows(showsRes);
      setLoading(false);
    });
  }, [url]);

  return (
    <div>
      <div>
        <h2 className="shows-title">{title}</h2>
      </div>
      <div className="shows-slider-complete">
        {loading ? (
          <span>loading...</span>
        ) : (
          <div className="label-with-tumbs-complete">
            {shows.map((show) => (
              <ShowCard key={show.id} show={show} category={endpoint} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;
