import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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

import {
  sectionVariants,
  itemsSectionVariants,
  inViewOptions
} from '../../animations';

const WhoAmI = () => {
  const controls = useAnimation();

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
    <section id="whoami" className="whoami">
      <motion.div
        className="whoami__container"
        ref={ ref }
        initial="hidden"
        animate={ controls }
        variants={ sectionVariants }
      >
        <div className="whoami__title">
          <Title number={ '00.' } text={ 'Qui suis-je ?' } />
        </div>
        <div className="whoami__content">
          <motion.div
            className="whoami__text"
            variants={ itemsSectionVariants }
          >
            Salut ! Moi, c’est Jenny-Lee, et j’aime créer du contenu vivant et inclusif sur internet. J’ai commencé à m’intéresser au développement web en 2011, lorsque je m’inscrivais sur des forums et que je proposais mon aide pour en améliorer le graphisme grâce au HTML, au CSS et au JavaScript.
            <br /> <br/>
            Même si mes études étaient plutôt orientées vers le design graphique, je ne me suis jamais vraiment éloignée du développement web, continuant de le pratiquer à titre personnel, mais aussi dans le cadre de mes cours.
            <br/> <br/>
            En 2020, j’ai commencé et terminé une formation de reconversion spécialisante dans la programmation web. Aujourd’hui, après quelques mois en freelancing, je cherche une entreprise souhaitant évoluer avec moi.
          </motion.div>
          <motion.div
            className="whoami__skills"
            variants={ itemsSectionVariants }
          >
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
                    alt="logotype of HTML"
                  /> HTML
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ css }
                    alt="logotype of CSS"
                  /> CSS
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ js }
                    alt="logotype of JavaScript"
                  /> JavaScript (ES5, ES6)
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ react }
                    alt="logotype of React"
                  /> React
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ node }
                    alt="logotype of Node.js"
                  /> Node.js
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ psql }
                    alt="logotype of PostgreSQL"
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
                    alt="logotype of Adobe Photoshop"
                  /> Photoshop
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ illustrator }
                    alt="logotype of Adobe Illustrator"
                  /> Illustrator
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ inDesign }
                    alt="logotype of Adobe InDesign"
                  /> InDesign
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ premierePro }
                    alt="logotype of Adobe Premiere Po"
                  /> Premiere Pro
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ afterEffects }
                    alt="logotype of Adobe After Effects"
                  /> After Effects
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ xd }
                    alt="logotype of Adobe XD"
                  /> XD
                </div>
                <div className="whoami__skills__item">
                  <img
                    src={ figma }
                    alt="logotype of Figma"
                  /> Figma
                </div>
              </div>
            </div>
            <div className="whoami__skills__title">
              <span className="whoami__skills__title--yellow">{ '}' }</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoAmI;