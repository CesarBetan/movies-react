import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ls from 'local-storage';
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
  const [favorites, setFavorites] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const movieApiUrl = buildUrlMovie(id);

  useEffect(() => {
    axios.get(movieApiUrl).then((res) => {
      const showRes = res.data;
      setShow(showRes);
      const favs = ls.get('favorites') || [];
      setFavorites(favs);
      if (favs.includes(`${id}`)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      setLoading(false);
    });
  }, [id]);

  const poster =
    show && show.poster_path == null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : DEFAULT_IMAGE_POSTER + show.poster_path;

  const addFavorite = () => {
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    setIsFavorite(true);
    ls.set('favorites', newFavorites);
  };
  const removeFavorite = () => {
    let newFavorites = [...favorites];
    newFavorites = newFavorites.filter((e) => e !== id);
    setFavorites(newFavorites);
    setIsFavorite(false);
    ls.set('favorites', newFavorites);
  };

  return (
    <div className="show-content">
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
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
                        {!loading &&
                          show.genres.map((genre) => (
                            <div className="show-label-det" key={genre.id}>
                              {genre.name}
                            </div>
                          ))}
                      </div>
                      <div className="extra-block">
                        <h5 className="extra-title">Favorite</h5>
                        {isFavorite ? (
                          <button className="button-favorite-add" onClick={removeFavorite}>
                            Remove from Favorites
                          </button>
                        ) : (
                          <button className="button-favorite-remove" onClick={addFavorite}>
                            Add to Favorites
                          </button>
                        )}
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
      )}
    </div>
  );
};

export default Show;
