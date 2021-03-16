import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/header/Header';
import Popular from './components/popular/Popular';
import TopRated from './components/topRated/TopRated';
import NowPlaying from './components/nowPlaying/NowPlaying';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/popular" component={Popular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/now-playing" component={NowPlaying} />
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
