import React from 'react';

import './styles.scss';

import Emoji from '../../partials/Emoji';

const Home = () => {
  return (
    <section id="home" className="home">
      <p className="home__text">
        <div className="home__text__hello">
          <Emoji symbol="👋" label="hand shake" /> Salut, je m'appelle
        </div>
        <div className="home__text__name">
          <span className="home__text__name--blue">
            Jenny-Lee Boulanger
          </span>.
        </div>
        Je suis une développeuse web spécialisée dans la création d'interface d'application web. Actuellement, je suis à la recherche active d'une entreprise à laquelle je pourrais faire profiter de mon expérience, et qui pourrait m'épauler dans ma montée en compétences.
        <button className="home__text__button">
          Contactez-moi
        </button>
      </p>
    </section>
  );
};

export default Home;