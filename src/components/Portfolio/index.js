import React from 'react';

import './styles.scss';

import Grid from '../Grid';
import Header from '../Header';
import Home from '../Home';
import WhoAmI from '../WhoAmI';
import Projects from '../Projects';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Grid />
      <Header />
      <div className="portfolio__container">
        <Home />
        <WhoAmI />
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;