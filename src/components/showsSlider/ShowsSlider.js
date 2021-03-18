import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShowCard from '../showCard/ShowCard';

const Shows = ({ titleShows, movieApiUrl, endpoint, viewOn }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const pathLinkTo = `/${endpoint}/view_all`;

  useEffect(() => {
    axios.get(movieApiUrl).then((res) => {
      const showsRes = res.data.results;
      setShows(showsRes);
      setLoading(false);
    });
  }, [movieApiUrl]);

  return (
    <div className="shows-slider">
      <h2 className="shows-title">{titleShows}</h2>
      <div className="shows-slider-content">
        {loading ? (
          <span>loading...</span>
        ) : (
          <div className="label_with_tumbs">
            {shows.slice(0, 8).map((show, index) => (
              <ShowCard key={`${index}-${show.Title}`} show={show} category={endpoint} />
            ))}
          </div>
        )}
        {viewOn ? (
          <div className="viewall">
            <Link to={pathLinkTo}>View All</Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Shows;
