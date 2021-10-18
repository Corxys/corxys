import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import './styles.scss';

import Emoji from '../../partials/Emoji';

import {
  inViewOptions,
  sectionVariants,
  itemsSectionVariants
} from '../../animations';

const Home = () => {
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
    <section id="home" className="home">
      <motion.div
        className="home__container"
        initial="hidden"
        animate={ controls }
        variants={ sectionVariants }
        >
        <div
          className="home__text"
          ref={ ref }
        >
          <motion.p
            className="home__text__hello"
            variants={ itemsSectionVariants }
          >
            <Emoji symbol="👋" label="hand shake" /> Salut, je m'appelle
          </motion.p>
          <motion.div
            className="home__text__name"
            variants={ itemsSectionVariants }
          >
            <span className="home__text__name--blue">
              Jenny-Lee Boulanger
            </span>.
          </motion.div>
          <motion.p
            className="home__text__content"
            variants={ itemsSectionVariants }
          >
            Je suis une développeuse web spécialisée dans la création d'interface d'application web. Actuellement, je suis à la recherche active d'une entreprise à laquelle je pourrais faire profiter de mon expérience, et qui pourrait m'épauler dans ma montée en compétences.
          </motion.p>
          <a href="mailto:jennblngr@gmail.com">
            <motion.button
              className="home__text__button"
              variants={ itemsSectionVariants }
            > 
              Contactez-moi
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;