import React from 'react';

import './styles.scss';

import Title from '../../partials/Title';

import Project from '../Project';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__title">
        <Title number={ '02.' } text={ 'Projets' } />
      </div>
      <div className="projects__container">
        <Project />
      </div>
    </div>
  );
};

export default Projects;