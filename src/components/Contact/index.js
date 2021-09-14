import React from 'react';

import './styles.scss';

import Title from '../../partials/Title';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__title">
        <Title number={ '02.' } text={ 'Contact' } />
      </div>
      <div className="contact__container">
        <p className="contact__text">
          Vous souhaitez collaborer avec moi pour un projet personnel ou professionnel ? Vous êtes au bon endroit. Même si je suis plutôt à la recherche d'une société pour m'accueillir, je reste disponible pour des missions en freelance et serait ravie de vous aider.
          <button className="contact__text__button">
            Contactez-moi
          </button>
        </p>
        <div className="contact__infos">
          <div className="contact__infos__email">
            <div className="contact__infos__email__title">
              Email
            </div>
            <div className="contact__infos__email__address">
              jennblngr@gmail.com
            </div>
          </div>
          <div className="contact__infos__tel">
            <div className="contact__infos__tel__title">
              Tél.
            </div>
            <div className="contact__infos__tel__number">
              +(33) 06 17 83 32 51
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;