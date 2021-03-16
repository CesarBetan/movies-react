import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w500';

const Show = ({ show }) => {
  const poster =
    show.poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : DEFAULT_IMAGE_POSTER + show.poster_path;
  return (
    <div className="show">
      <h2>{show.original_title}</h2>
      <div>
        <img width="200" alt={`The show titled: ${show.original_title}`} src={poster} />
      </div>
      <p>({show.vote_average})</p>
    </div>
  );
};

export default Show;
