import React from 'react';
import Image from 'next/image';

const topHeader = () => {
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <div
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a href="index-2.html">
              <Image src="/images/logo.png" alt="logo" className="logo" width={119} height={58} />
            </a>
          </div>
          <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="loginLink">
                <a href="#">Home</a>
              </li>
              <li className="loginLink">
                <a href="#">Movies</a>
              </li>
              <li className="loginLink">
                <a href="#">Shows</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default topHeader;
