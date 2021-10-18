import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import './styles.scss';

import Title from '../../partials/Title';

import {
  inViewOptions,
  sectionVariants,
  itemsSectionVariants,
} from '../../animations';

import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/svg/github.svg';

const Contact = () => {
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
    <section id="contact" className="contact">
      <motion.div
        className="contact__container"
        initial="hidden"
        animate={ controls }
        variants={ sectionVariants }
        >
        <div
          className="contact__title"
          ref={ ref }
        >
          <Title number={ '02.' } text={ 'Contact' } />
        </div>
        <div className="contact__content">
          <motion.div
            className="contact__text"
            variants={ itemsSectionVariants }
          >
            <p className="contact__text__paragraph">
              Vous souhaitez collaborer avec moi pour un projet personnel ou professionnel ? Vous êtes au bon endroit. Même si je suis plutôt à la recherche d'une société pour m'accueillir, je reste disponible pour des missions en freelance et serait ravie de vous aider.
            </p>
            <a href="mailto:jennblngr@gmail.com">
              <button className="contact__text__button">
                Contactez-moi
              </button>
            </a>
          </motion.div>
          <motion.div
            className="contact__infos"
            variants={ itemsSectionVariants }
          >
            <div className="contact__infos__email">
              <div className="contact__infos__email__title">
                Email
              </div>
              <a href="mailto:jennblngr@gmail.com" className="contact__infos__email__address">
                jennblngr@gmail.com
              </a>
            </div>
            <div className="contact__infos__tel">
              <div className="contact__infos__tel__title">
                Tél.
              </div>
              <div className="contact__infos__tel__number">
                <a href="tel:+33617833251">
                  +(33) 06 17 83 32 51
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="contact__footer">
        <div className="contact__footer__socials">
          <div className="contact__footer__social">
            <a href="https://github.com/Corxys" target="_blank" rel="noreferrer">
              <GitHub />
            </a>
          </div>
          <div className="contact__footer__social">
            <a href="https://www.linkedin.com/in/jenny-lee-boulanger-7aa3b8b9/" target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
          </div>
          <div className="contact__footer__social">
            <a href="https://twitter.com/blngrjnn" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;