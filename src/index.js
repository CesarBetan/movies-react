import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/header/Header';
import Shows from './components/shows/Shows';
import Show from './components/show/Show';
import Favorites from './components/favorites/Favorites';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/popular/view_all"
          render={(props) => <Shows {...props} title={'Popular'} endpoint={'popular'} />}
        />
        <Route
          path="/top_rated/view_all"
          render={(props) => <Shows {...props} title={'Top Rated'} endpoint={'top_rated'} />}
        />
        <Route
          path="/now_playing/view_all"
          render={(props) => <Shows {...props} title={'Now Playing'} endpoint={'now_playing'} />}
        />
        <Route path="/favorites/view_all" component={Favorites} />
        <Route path="/show/:id" component={Show} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
