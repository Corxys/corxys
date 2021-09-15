import React from 'react';

import './styles.scss';

import Title from '../../partials/Title';

import Project from '../Project';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__title">
        <Title number={ '01.' } text={ 'Projets' } />
      </div>
      <div className="projects__container">
        <Project />
      </div>
      <div className="projects__pagination">
        <div className="projects__page projects__page--active"></div>
        <div className="projects__page"></div>
        <div className="projects__page"></div>
      </div>
    </section>
  );
};

export default Projects;