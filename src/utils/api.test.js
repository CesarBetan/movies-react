import { buildUrl } from './api';

describe('ApiTest', () => {
  test('should return correct url from buildUrl', () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US';
    expect(buildUrl('popular')).toBe(url);
  });
});
