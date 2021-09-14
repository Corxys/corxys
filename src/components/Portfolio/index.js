import React from 'react';

import './styles.scss';

import Grid from '../Grid';
import Header from '../Header';
import Home from '../Home';
import WhoAmI from '../WhoAmI';
import Projects from '../Projects';
import Contact from '../Contact';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Grid />
      <Header />
      <div className="portfolio__container">
        <Home />
        <WhoAmI />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;