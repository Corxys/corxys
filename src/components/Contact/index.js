import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { sendForm } from "@emailjs/browser";

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

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [formSend, setFormSend] = useState({
    isVisible: false,
    message: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    sendForm(SERVICE_ID, TEMPLATE_ID, '#form', USER_ID)
      .then((response) => {
        setFormSend({ ...formSend, isVisible: true, message: 'Formulaire envoyé !' });
        setToSend({
          name: '',
          email: '',
          telephone: '',
          message: '',
        });

        setTimeout(() => {
          setFormSend({ ...formSend, isVisible: false });
        }, 3000);

        // console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        setFormSend({ ...formSend, message: 'Formulaire non envoyé :/' });

        // console.log('FAILED!', error);
      });
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

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
              <form
                id="form"
                className="contact__form"
                onSubmit={ onSubmit }
              >
                <input
                  className="contact__form-input"
                  type="text"
                  name="name"
                  placeholder="Nom / Prénom"
                  value={ toSend.name }
                  onChange={ handleChange }
                  required
                />
                <input
                  className="contact__form-input"
                  type="email"
                  name="email"
                  placeholder="Adresse mail"
                  value={ toSend.email }
                  onChange={ handleChange }
                  required
                />
                <input
                  className="contact__form-input"
                  type="tel"
                  name="telephone"
                  placeholder="Numéro de téléphone"
                  value={ toSend.telephone }
                  onChange={ handleChange }
                />
                <textarea
                  className="contact__form-textarea"
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  value={ toSend.message }
                  onChange={ handleChange }
                  required
                />
                <div className="contact__form__footer">
                  <button className="contact__form__button" type="submit">
                    Envoyer
                  </button>
                  <AnimatePresence>
                    {
                      formSend.isVisible &&
                      (
                        <motion.p
                          className="contact__form__message"
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring' }}
                        >
                          { formSend.message }
                        </motion.p>
                      )
                    }
                  </AnimatePresence>
                </div>
              </form>
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
                  +(33) 6 17 83 32 51
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