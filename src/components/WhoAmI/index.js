import React from 'react';

import './styles.scss';

import Title from '../../partials/Title';

import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import js from '../../assets/svg/js.svg';
import react from '../../assets/svg/react.svg';
import node from '../../assets/svg/node.svg';
import psql from '../../assets/svg/psql.svg';
import photoshop from '../../assets/svg/photoshop.svg';
import illustrator from '../../assets/svg/illustrator.svg';
import inDesign from '../../assets/svg/indesign.svg';
import premierePro from '../../assets/svg/premierepro.svg';
import afterEffects from '../../assets/svg/aftereffects.svg';
import xd from '../../assets/svg/xd.svg';
import figma from '../../assets/svg/figma.svg';

const WhoAmI = () => {
  return (
    <section id="whoami" className="whoami">
      <div className="whoami__title">
        <Title number={ '00.' } text={ 'Qui suis-je ?' } />
      </div>
      <div className="whoami__container">
        <p className="whoami__text">
        Salut ! Moi, c’est Jenny-Lee, et j’aime créer du contenu vivant et inclusif sur internet. J’ai commencé à m’intéresser au développement web en 2011, lorsque je m’inscrivais sur des forums et que je proposais mon aide pour en améliorer le graphisme grâce au HTML, au CSS et au JavaScript.
        <br /> <br/>
        Même si mes études étaient plutôt orientées vers le design graphique, je ne me suis jamais vraiment éloignée du développement web, continuant de le pratiquer à titre personnel, mais aussi dans le cadre de mes cours.
        <br/> <br/>
        En 2020, j’ai commencé et terminé une formation de reconversion spécialisante dans la programmation web. Aujourd’hui, après quelques mois en freelancing, je cherche une entreprise souhaitant évoluer avec moi.
        </p>
        <div className="whoami__skills">
          <div className="whoami__skills__title">
            <span className="whoami__skills__title--blue">
              const 
            </span> <span className="whoami__skills__title--green">
              Skills 
            </span> <span className="whoami__skills__title--red">
              = 
            </span> <span className="whoami__skills__title--yellow">
              () 
            </span> <span className="whoami__skills__title--blue">
              { '=> ' }
            </span>
            <span className="whoami__skills__title--yellow">
              { '{' }
            </span>
          </div>
          <div className="whoami__skills__categories">
            <h2 className="whoami__skills__subtitle">
              Développement web
            </h2>
            <div className="whoami__skills__list">
              <div className="whoami__skills__item">
                <img
                  src={ html }
                  alt="/"
                /> HTML
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ css }
                  alt="/"
                /> CSS
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ js }
                  alt="/"
                /> JavaScript (ES5, ES6)
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ react }
                  alt="/"
                /> React
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ node }
                  alt="/"
                /> Node.js
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ psql }
                  alt="/"
                /> PostgreSQL
              </div>
            </div>
            <h2 className="whoami__skills__subtitle">
              Design graphique
            </h2>
            <div className="whoami__skills__list">
              <div className="whoami__skills__item">
                <img
                  src={ photoshop }
                  alt="/"
                /> Photoshop
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ illustrator }
                  alt="/"
                /> Illustrator
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ inDesign }
                  alt="/"
                /> InDesign
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ premierePro }
                  alt="/"
                /> Premiere Pro
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ afterEffects }
                  alt="/"
                /> After Effects
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ xd }
                  alt="/"
                /> XD
              </div>
              <div className="whoami__skills__item">
                <img
                  src={ figma }
                  alt="/"
                /> Figma
              </div>
            </div>
          </div>
          <div className="whoami__skills__title">
            <span className="whoami__skills__title--yellow">{ '}' }</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;