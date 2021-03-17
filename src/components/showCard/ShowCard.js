import React from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w500';

const ShowCard = ({ show, category }) => {
  const poster =
    show.poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : DEFAULT_IMAGE_POSTER + show.poster_path;
  const url = `/${category}/${show.id}`;

  return (
    <div className="show-box">
      <Link to={url}>
        <div className="image-container">
          <img
            className="show-thumb"
            alt={`The show titled: ${show.original_title}`}
            src={poster}
          />
        </div>
        <div className="info-show">
          <div className="show-title">
            <div className="show-label">Action</div>
            <p className="show-label-title">{show.original_title}</p>
            <p className="show-calfication">{show.vote_average} / 10</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;
