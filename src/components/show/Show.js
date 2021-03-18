import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { buildUrlMovie, buildUrlMovieRecomend } from '../../utils/api';
import ShowsSlider from '../showsSlider/ShowsSlider';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w400';

const Show = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState([]);

  const movieApiUrl = buildUrlMovie(id);

  useEffect(() => {
    axios.get(movieApiUrl).then((res) => {
      console.log(res);
      const showRes = res.data;
      setShow(showRes);
      setLoading(false);
    });
  }, [id]);
  const poster =
    show.poster_path === undefined
      ? DEFAULT_PLACEHOLDER_IMAGE
      : DEFAULT_IMAGE_POSTER + show.poster_path;
  let genres = '';
  genres = `${genres} ${show.genres === undefined ? '' : show.genres.map((a) => a.name)}`;

  return (
    <div className="show-content">
      <div className="show-details">
        <div className="show-container">
          <div className="show-row">
            <div className="show-image-detail-3">
              <div className="show-row">
                <div className="show-image-detail-12">
                  <div className="image-detail-thumb">
                    <img className="image-fluid" src={poster} />
                  </div>
                </div>
              </div>
            </div>
            <div className="show-image-detail-9">
              <div className="show-detail-content">
                <div className="show-det-title">
                  <h2>{show.title}</h2>
                </div>
                <div className="show-det-info">
                  <span>{show.adult ? '18+' : '18-'}</span>
                  <span>{show.runtime}</span>
                  <span>{show.release_date}</span>
                  <span>{show.vote_average}</span>
                  <span>{show.vote_count}</span>
                </div>
                <div className="show-det-desc">
                  <p>
                    "{show.tagline}"
                    <br />
                    {show.overview}
                  </p>
                </div>
                <div className="show-det-extra">
                  <div className="extra-block">
                    <h5 className="extra-title">Genres</h5>
                    <p className="extra-name">{genres}</p>
                  </div>
                  <div className="extra-block">
                    <h5 className="extra-title">Favorite</h5>
                    Button
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show-image-detail-12">
        <ShowsSlider
          titleShows={'Recommendations'}
          movieApiUrl={buildUrlMovieRecomend(id)}
          endpoint={'popular'}
          viewOn={false}
        />
      </div>
    </div>
  );
};

export default Show;
