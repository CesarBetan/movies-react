import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildUrl } from '../../utils/api';
import ShowCard from '../showCard/ShowCard';

/**
 * Represents a view for displaying the views of popular, top rated and now playing shows.
 * It displays the first page of the category selected by the user by making a call to the API
 * with the endpoint thath corresponds.
 *
 * @component
 * return (
 *   <Shows />
 * )
 * @prop {string} title - The title that will be displayed on the component view.
 * @prop {string} endpoint - Which endpoint corresponds to the the title and view that will be displayed.
 */
const Shows = ({ title, endpoint }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [sortName, setSortName] = useState(false);
  const [sortUpvotes, setSortUpvotes] = useState(false);
  const url = buildUrl(endpoint);

  /**
   * Function used to update the state of the component when the component mounts, and the url,
   * sortName or sortUpvotes are updated.
   *
   * @function useEffect
   */
  useEffect(() => {
    /**
     * Get data of the shows according to the category selected by the user.
     *
     * @async
     * @function getShows
     * @return {array[object]} - An array of objects containing the shows.
     */
    const getShows = async () => {
      const newShows = await axios.get(url);
      const showsRes = newShows.data.results;
      setShows(showsRes);
      setLoading(false);
    };
    getShows();
  }, [url, sortName, sortUpvotes]);

  /**
   * It changes to true the value of sortName that sorts the shows stored in the state ordered by name.
   * If they are already orderd, it reverts the process.
   *
   * @function sortbyName
   */
  const sortbyName = () => {
    setSortName(!sortName);
    if (sortUpvotes) {
      setSortUpvotes(false);
    }
  };
  /**
   * It changes to true the value of sortUpvotes that sorts the shows stored in the state ordered
   * by user calification. If they are already orderd, it reverts the process.
   *
   * @function sortbyUpvotes
   */
  const sortbyUpvotes = () => {
    setSortUpvotes(!sortUpvotes);
    if (sortName) {
      setSortName(false);
    }
  };

  return (
    <div>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          <div className="show-row">
            <div className="show-image-detail-9">
              <h2 className="shows-title">{title}</h2>
            </div>
            <div className="show-image-detail-3">
              <button
                className={`show-label-det shows-filters ${sortName ? 'active-filter ' : ''}`}
                onClick={sortbyName}
              >
                <FontAwesomeIcon icon="sort-alpha-down" className="my-icons" />
                Sort by Name
              </button>
              <button
                className={`show-label-det shows-filters ${sortUpvotes ? 'active-filter ' : ''}`}
                onClick={sortbyUpvotes}
              >
                <FontAwesomeIcon icon="sort-numeric-down-alt" className="my-icons" />
                Sort by Calfication
              </button>
            </div>
          </div>
          <div className="shows-slider-complete">
            <div className="label-with-tumbs-complete">
              {sortName
                ? shows
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((show) => <ShowCard key={show.id} show={show} />)
                : sortUpvotes
                ? shows
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .map((show) => <ShowCard key={show.id} show={show} />)
                : shows.map((show) => <ShowCard key={show.id} show={show} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shows;
