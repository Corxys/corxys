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
    </section>
  );
};

export default Projects;