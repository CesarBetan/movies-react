import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({}) => {
  return (
    <div className="App-header">
      <div className="header-wrapper">
        <div className="header-logo">
          <h2>Shows DB</h2>
        </div>
        <nav className="header-nav">
          <div className="menubar">
            <ul className="menunav">
              <li>
                <Link to="/" className="nav-link active">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/popular" className="nav-link">
                  <p>Popular</p>
                </Link>
              </li>
              <li>
                <Link to="/top-rated" className="nav-link">
                  <p>Top Rated</p>
                </Link>
              </li>
              <li>
                <Link to="/now-playing" className="nav-link">
                  <p>Now Playing</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
