import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Show from '../show/Show';

const MOVIE_API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=1';

const Popular = ({}) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((res) => {
      const shows = res.data.results;
      setShows(shows);
      setLoading(false);
    });
  }, []);

  return (
    <div className="shows-slider-complete">
      <h2 className="shows-title">Popular</h2>
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

export default Popular;
