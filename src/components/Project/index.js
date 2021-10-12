import React from 'react';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

import './styles.scss';

import { ReactComponent as GitHub } from '../../assets/svg/github.svg';
import { ReactComponent as Link } from '../../assets/svg/link.svg';

import { itemsSectionVariants } from '../../animations';

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="project__introduction">
        <motion.div
          className="project__header"
          variants={ itemsSectionVariants }
        >
          <div className="project__header__context">
            { data.context }
          </div>
          <div className="project__header__title">
            <a href={ data.links[1].src } target="_blank" rel="noreferrer">
              { data.title }
            </a>
          </div>
        </motion.div>
        <motion.div
          className="project__description"
          variants={ itemsSectionVariants }
        >
          <p className="project__description__content">
            { data.description }
          </p>
          <div className="project__description__tools">
            {
              data.tools.map((tool, index) => {
                return (
                  <div key={ index } className="project__description__tool">
                    { tool }
                  </div>
                )
              })
            }
          </div>
        </motion.div>
        <motion.div
          className="project__links"
          variants={ itemsSectionVariants }
        >
          {
            data.links[0] &&
            (
              <div className="project__link">
                <GitHub />
                <div className="project__link__text">
                  <a href={ data.links[0].src } target="_blank" rel="noreferrer">
                    { data.links[0].name }
                  </a>
                </div>
              </div>
            )
          }
          {
            data.links[1] &&
            (
              <div className="project__link">
                <Link />
                <div className="project__link__text">
                  <a href={ data?.links[1].src } target="_blank" rel="noreferrer">
                    { data?.links[1].name }
                  </a>
                </div>
              </div>
            )
          }
        </motion.div>
      </div>
      <motion.div
        className="project__image"
        variants={ itemsSectionVariants }
      >
        <a href={ data.links[1].src} target="_blank" rel="noreferrer">
          <img
            className="project__image__src"
            src={ data.image.src }
            alt={ data.image.alt }
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Project;