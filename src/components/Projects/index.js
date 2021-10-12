import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import './styles.scss';

import Title from '../../partials/Title';

import Project from '../Project';

import { projects } from '../../data/projects';

import {
  inViewOptions,
  sectionVariants
} from '../../animations';

const Projects = () => {
  const controls = useAnimation();

  const [page, setPage] = useState(0);

  const { ref, inView } = useInView(inViewOptions);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects__container"
        initial="hidden"
        animate={ controls }
        variants={ sectionVariants }
      >
        <div
          ref={ ref }
          className="projects__title">
          <Title number={ '01.' } text={ 'Projets' } />
        </div>
        <div className="projects__content">
          <Project data={ projects[page] } />
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
      </motion.div>
    </section>
  );
};

export default Projects;