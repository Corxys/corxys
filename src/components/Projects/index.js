import React, { useState } from 'react';

import './styles.scss';

import Title from '../../partials/Title';

import Project from '../Project';

import { projects } from '../../data/projects';

const Projects = () => {
  const [page, setPage] = useState(0);

  return (
    <section id="projects" className="projects">
      <div className="projects__title">
        <Title number={ '01.' } text={ 'Projets' } />
      </div>
      <div className="projects__container">
        <Project data={ projects[page]} />
      </div>
      <div className="projects__pagination">
        {
          projects.map((project, index) => {
            if (index === page) {
              return (
                <div
                  key={ `page-${index}` }
                  className="projects__page projects__page--active"
                />
              )
            } else {
              return (
                <div
                  key={ `page-${index}` }
                  className="projects__page"
                  onClick={() => {
                    setPage(index);
                  }}
                />
              )
            }
          })
        }
      </div>
    </section>
  );
};

export default Projects;