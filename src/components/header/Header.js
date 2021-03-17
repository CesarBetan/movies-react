import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const active = useLocation().pathname;

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
                <Link to="/" className={`nav-link ${active === '/' ? 'active' : ''}`}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/popular" className={`nav-link ${active === '/popular' ? 'active' : ''}`}>
                  <p>Popular</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/top_rated"
                  className={`nav-link ${active === '/top_rated' ? 'active' : ''}`}
                >
                  <p>Top Rated</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/now_playing"
                  className={`nav-link ${active === '/now_playing' ? 'active' : ''}`}
                >
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
