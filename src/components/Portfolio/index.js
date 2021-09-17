import React from 'react';

import './styles.scss';

import Grid from '../Grid';
import Header from '../Header';
import Home from '../Home';
import WhoAmI from '../WhoAmI';
import Projects from '../Projects';
import Contact from '../Contact';
import Fixed from '../Fixed';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <div className="portfolio__container">
        <Grid />
        <Home />
        <WhoAmI />
        <Projects />
        <Contact />
      </div>
      <Fixed />
    </div>
  );
};

export default Portfolio;