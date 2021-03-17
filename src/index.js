import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/header/Header';
import Shows from './components/shows/Shows';
import Show from './components/show/Show';
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
        <Route path="/popular/:id" component={Show} />
        <Route path="/top_rated/:id" component={Show} />
        <Route path="/now_playing/:id" component={Show} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
