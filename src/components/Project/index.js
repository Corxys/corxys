import React from 'react';

import './styles.scss';

import gitHub from '../../assets/svg/github.svg';
import link from '../../assets/svg/link.svg';

const Project = () => {
  return (
    <div className="project">
      <div className="project__header">
        <div className="project__header__context">
          Freelance
        </div>
        <div className="project__header__title">
          Habiter
        </div>
      </div>
      <p className="project__description">
        Une exposition virtuelle et participative, disponible en ligne jusqu’en juin 2022. Elle rassemble divers témoignages de personnes affectées par les effets du changement climatique à travers le monde. Ma mission a consisté à développer le site à partir de la maquette proposée par le graphiste.
        <div className="project__description__tools">
          <div className="project__description__tool">
            React
          </div>
          <div className="project__description__tool">
            SASS
          </div>
          <div className="project__description__tool">
            Redux
          </div>
          <div className="project__description__tool">
            Framer Motion
          </div>
          <div className="project__description__tool">
            Strapi
          </div>
        </div>
      </p>
      <div className="project__links">
        <div className="project__link">
          <img
            src={ gitHub }
            alt="/"
          />
          <div className="project__link__text">
            <a href="/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="project__link">
          <img
            src={ link }
            alt="/"
          />
          <div className="project__link__text">
            <a href="/" target="_blank">
              HTTP
            </a>
          </div>
        </div>
      </div>
      <div className="project__image">
        <img
          src="/"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Project;