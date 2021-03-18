import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const active = useLocation().pathname;
  const [displayNav, setDisplayNav] = useState(false);

  const toggleNav = () => {
    setDisplayNav(!displayNav);
    console.log(displayNav);
  };

  return (
    <div className="App-header">
      <div className="header-wrapper">
        <div className="header-logo">
          <Link to="/" className="logo">
            <h2>Movies DB</h2>
          </Link>
        </div>
        <div className="ham-nav">
          <button className="button-favorite-add" onClick={toggleNav}>
            Ham
          </button>
        </div>
        <nav className={`header-nav ${displayNav ? 'header-nav-active' : ''}`}>
          <div className="menubar">
            <ul className="menunav">
              <li>
                <Link to="/" className={`nav-link ${active === '/' ? 'active' : ''}`}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/popular/view_all"
                  className={`nav-link ${active === '/popular/view_all' ? 'active' : ''}`}
                >
                  <p>Popular</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/top_rated/view_all"
                  className={`nav-link ${active === '/top_rated/view_all' ? 'active' : ''}`}
                >
                  <p>Top Rated</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/now_playing/view_all"
                  className={`nav-link ${active === '/now_playing/view_all' ? 'active' : ''}`}
                >
                  <p>Now Playing</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites/view_all"
                  className={`nav-link ${active === '/favorites/view_all' ? 'active' : ''}`}
                >
                  <p>My Favorites</p>
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
