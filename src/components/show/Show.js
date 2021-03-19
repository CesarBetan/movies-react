import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ls from 'local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { buildUrlMovie, buildUrlMovieRecomend } from '../../utils/api';
import ShowsSlider from '../showsSlider/ShowsSlider';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';
const DEFAULT_IMAGE_POSTER = 'https://image.tmdb.org/t/p/w400';

/**
 * Represents a detailed view for the show selected in another view. It retrieves the
 * id of the show from the params of the url in order to ask for the API for the
 * information and display it in the view. It stores and retrieves the favorites information
 * from the local-storage. In the end it uses the ShowsSlider component to display
 * recommended shows according to the current show.
 * It displays the following information for the show:
 * Poster, title, tagline, overview, genres, adult, runtime, release date, vote average and vote count.
 *
 * @component
 * return (
 *   <Show />
 * )
 * @param {string} id - The id of the show to retrieve.
 */

const Show = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState([]);
  const [favorites, setFavorites] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const movieApiUrl = buildUrlMovie(id);

  /**
   * Function used to update the state of the component when the component mounts, and updates the state
   * id of the show.
   *
   * @function useEffect
   */
  useEffect(() => {
    /**
     * Get data of the current show from the specified id of the show retrieved from the url params.
     *
     * @async
     * @function
     * @return {object} - An containing all the data of the current show.
     */
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
      window.scrollTo(0, 0);
    });
  }, [id]);

  const poster =
    show && show.poster_path == null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : DEFAULT_IMAGE_POSTER + show.poster_path;

  /**
   * It changes to true the value of isFavorite to change the render view of the show to
   * display that you can add it to favorites.
   * It gets the current favorite shows from the state, adds or removes this current show
   * according to the case and saves the new array to the local-storage.
   *
   * @function addFavorite
   */
  const addFavorite = () => {
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    setIsFavorite(true);
    ls.set('favorites', newFavorites);
  };
  /**
   * It changes to false the value of isFavorite to change the render view of the show to
   * display that it is already added to favorites and give the option of remove it.
   * It gets the current favorite shows from the state, adds or removes this current show
   * according to the case and saves the new array to the local-storage.
   *
   * @function removeFavorite
   */
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
                        <img className="image-fluid" alt={id} src={poster} />
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
                      <span>
                        <FontAwesomeIcon icon="users" className="my-icons" />
                        {show.adult ? '18+' : '18-'}
                      </span>
                      <span>
                        <FontAwesomeIcon icon="clock" className="my-icons" />
                        {show.runtime} min.
                      </span>
                      <span>
                        <FontAwesomeIcon icon="calendar-day" className="my-icons" />
                        {show.release_date.split('-')[0]}
                      </span>
                      <span>
                        <FontAwesomeIcon icon="star" className="my-icons" />
                        {show.vote_average}
                      </span>
                      <span>
                        <FontAwesomeIcon icon="poll" className="my-icons" />
                        {show.vote_count}
                      </span>
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
                            <FontAwesomeIcon icon="heart-broken" className="my-icons" />
                            Remove from Favorites
                          </button>
                        ) : (
                          <button className="button-favorite-remove" onClick={addFavorite}>
                            <FontAwesomeIcon icon="heart" className="my-icons" />
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
