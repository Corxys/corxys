import React from 'react';

import './styles.scss';

import Header from '../Header';
import Home from '../Home';
import WhoAmI from '../WhoAmI';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <Home />
      <WhoAmI />
    </div>
  );
};

export default Portfolio;