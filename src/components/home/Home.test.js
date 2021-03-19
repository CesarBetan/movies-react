import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from './Home';

describe('HomeTest', () => {
  test('component should render', () => {
    const history = createMemoryHistory();
    const container = render(
      <Router history={history}>
        <Home />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
