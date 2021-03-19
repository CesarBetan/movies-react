import React from 'react';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faCalendarDay,
  faClock,
  faUsers,
  faPoll,
  faHeart,
  faHeartBroken,
  faBars,
  faChevronDown,
  faSortAlphaDown,
  faSortNumericDownAlt,
} from '@fortawesome/free-solid-svg-icons';

import Home from './home/Home';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

library.add(
  faStar,
  faCalendarDay,
  faClock,
  faUsers,
  faPoll,
  faHeart,
  faHeartBroken,
  faBars,
  faChevronDown,
  faSortAlphaDown,
  faSortNumericDownAlt,
);

export default App;
