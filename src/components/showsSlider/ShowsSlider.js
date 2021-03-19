import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowCard from '../showCard/ShowCard';

/**
 * Represents a view to display a glance of each category of movies (popular, now playing
 * and top rated). It recives the title that will be displayed in the section, the
 * prebuilt APIurl that will be used to retrieve the shows, the endpoint to build the path
 * that will be used to view more of the selected category and a flag to know if it should
 * display the button of view all the movies of the selected category.
 *
 * @component
 * return (
 *   <ShowsSlider />
 * )
 * @prop {string} - The title that will be displayed in the section view.
 * @prop {string} - The prebuilt APIurl that will be used to retrieve the shows.
 * @prop {string} - The endpoint used to create the path links.
 * @prop {boolean} - A flag used to know if the viewall button should be displayed.
 */
const Shows = ({ titleShows, movieApiUrl, endpoint, viewOn }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const pathLinkTo = `/${endpoint}/view_all`;

  /**
   * Function used to update the state of the component when the component mounts.
   *
   * @function useEffect
   */
  useEffect(() => {
    /**
     * Get data of each favorite show from the specified lists of ids retrieved from
     * the local-storage.
     *
     * @async
     * @function getShows
     * @return {array[object]} - An array of objects containing the shows.
     */
    const getShows = async () => {
      const newShows = await axios.get(movieApiUrl);
      const showsRes = newShows.data.results;
      setShows(showsRes);
      setLoading(false);
    };
    getShows();
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
              <ShowCard key={`${index}-${show.Title}`} show={show} />
            ))}
          </div>
        )}
        {viewOn ? (
          <div className="viewall">
            <Link to={pathLinkTo}>
              View All
              <FontAwesomeIcon icon="chevron-down" />
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Shows;
