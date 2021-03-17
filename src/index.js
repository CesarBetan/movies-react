import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/header/Header';
import Shows from './components/shows/Shows';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/popular"
          render={(props) => <Shows title={'Popular'} endpoint={'popular'} />}
        />
        <Route
          path="/top_rated"
          render={(props) => <Shows title={'Top Rated'} endpoint={'top_rated'} />}
        />
        <Route
          path="/now_playing"
          render={(props) => <Shows title={'Now Playing'} endpoint={'now_playing'} />}
        />
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
