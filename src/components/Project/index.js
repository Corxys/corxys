import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

import gitHub from '../../assets/svg/github.svg';
// import link from '../../assets/svg/link.svg';

const Project = ({ data }) => {
  return (
    <div className="project">
      {/* <div className="project__container"> */}
      <div className="project__introduction">
        <div className="project__header">
            <div className="project__header__context">
              { data.context }
            </div>
            <div className="project__header__title">
              { data.title }
            </div>
          </div>
          <p className="project__description">
            { data.description }
            <div className="project__description__tools">
              {
                data.tools.map((tool) => {
                  return (
                    <div className="project__description__tool">
                      { tool }
                    </div>
                  )
                })
              }
            </div>
          </p>
          <div className="project__links">
            {
              data.links.map((link) => {
                return (
                  <div className="project__link">
                    <img
                      src={ gitHub }
                      alt="/"
                    />
                    <div className="project__link__text">
                      <a href={ link.src } target="_blank" rel="noreferrer">
                        { link.name }
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
      {/* </div> */}
      <div className="project__image">
        <img
          className="project__image__src"
          src={ data.image.src }
          alt={ data.image.alt }
        />
      </div>
    </div>
  );
};

export default Project;