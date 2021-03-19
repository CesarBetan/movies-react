import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ShowCard, { getGenre } from './ShowCard';

describe('HomeTest', () => {
  test('component should render', () => {
    const history = createMemoryHistory();
    const show = {
      adult: false,
      backdrop_path: '/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
      genre_ids: [16, 12, 14, 10751, 28],
      id: 527774,
      original_language: 'en',
      original_title: 'Raya and the Last Dragon',
      overview:
        'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
      popularity: 3581.218,
      poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
      release_date: '2021-03-03',
      title: 'Raya and the Last Dragon',
      video: false,
      vote_average: 8.5,
      vote_count: 1366,
    };
    const container = render(
      <Router history={history}>
        <ShowCard show={show} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  describe('GetGenreTest', () => {
    test('should return genre Action', () => {
      const genreRes = 'Action';
      const genre = getGenre(28);
      expect(genre).toBe(genreRes);
    });
    test('should return genre Comedy', () => {
      const genreRes = 'Comedy';
      const genre = getGenre(35);
      expect(genre).toBe(genreRes);
    });
    test('should return Not Classified', () => {
      const genreRes = 'Not Classified';
      const genre = getGenre(112);
      expect(genre).toBe(genreRes);
    });
  });
});
