import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Show from '../show/Show';

const Shows = ({ title, movieApiUrl }) => {
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
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        shows.map((show, index) => <Show key={`${index}-${show.Title}`} show={show} />)
      )}
    </div>
  );
};

export default Shows;
