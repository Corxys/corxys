import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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
            { data?.context }
          </div>
          <div className="project__header__title">
            { data?.links[1] &&
              (
                <a href={ data.links[1].src } target="_blank" rel="noreferrer">
                  { data?.title }
                </a>
              )
            }
            { !data?.links[1] &&
              (
                <>
                  { data?.title }
                </>
              )
            }
          </div>
        </motion.div>
        <motion.div
          className="project__description"
          variants={ itemsSectionVariants }
        >
          <p className="project__description__content">
            { data?.description }
          </p>
          <div className="project__description__tools">
            {
              data?.tools.map((tool, index) => {
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
            data?.links[0] &&
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
            data?.links[1] &&
            (
              <div className="project__link">
                <Link />
                <div className="project__link__text">
                  <a href={ data.links[1].src } target="_blank" rel="noreferrer">
                    { data.links[1].name }
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
        {
          data?.links[1] &&
            (
              <a href={ data.links[1].src} target="_blank" rel="noreferrer">
                <img
                  className="project__image__src"
                  src={ data.image.src }
                  alt={ data.image.alt }
                />
              </a>
            )
        }
        {
          !data?.links[1] &&
            (
              <>
                <img
                  className="project__image__src"
                  src={ data.image.src }
                  alt={ data.image.alt }
                />
              </>
            )
        }
      </motion.div>
    </div>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    context: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    })),
    tools: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Project;