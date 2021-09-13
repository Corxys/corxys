import React from 'react';

import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#home">
          { '<' }
          <span className="header__logo--blue">
            JLB
          </span>
          { ' />' }
        </a>
      </div>
      <nav className="header__navbar">
        <ul className="header__navbar__items">
          <li className="header__navbar__item">
            <a href="#whoami">
              <span className="header__navbar__item--blue">
                00.
              </span> Qui suis-je ?
            </a>
          </li>
          <li className="header__navbar__item">
            <a href="#experiences">
              <span className="header__navbar__item--blue">
                01.
              </span> Expériences
            </a>
          </li>
          <li className="header__navbar__item">
            <a href="#projects">
              <span className="header__navbar__item--blue">
                02.
              </span> Projets
            </a>
          </li>
          <li className="header__navbar__item">
            <a href="#contact">
              <span className="header__navbar__item--blue">
                03.
              </span> Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;