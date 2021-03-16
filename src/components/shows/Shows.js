import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Show from '../show/Show';

const Shows = ({ titleShows, movieApiUrl }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(movieApiUrl).then((res) => {
      const shows = res.data.results;
      setShows(shows);
      setLoading(false);
    });
  }, []);

  return (
    <div className="shows-slider">
      <h2 className="shows-title">{titleShows}</h2>
      <div className="shows-slider-content">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <div className="label_with_tumbs">
            {shows.slice(0, 8).map((show, index) => (
              <Show key={`${index}-${show.Title}`} show={show} />
            ))}
          </div>
        )}
        <div className="viewall">
          <a href="#">View All</a>
        </div>
      </div>
    </div>
  );
};

export default Shows;
