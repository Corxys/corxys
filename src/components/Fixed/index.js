import React from 'react';

import './styles.scss';

import gitHub from '../../assets/svg/github.svg';
import linkedIn from '../../assets/svg/linkedin.svg';
import twitter from '../../assets/svg/twitter.svg';

const Fixed = () => {
  return (
    <div className="fixed">
      <div className="fixed__socials">
        <div className="fixed__social">
          <a href="https://github.com/Corxys" target="_blank" rel="noreferrer">
            <img 
              src={ gitHub }
              alt="logotype of github"
            />
          </a>
        </div>
        <div className="fixed__social">
          <a href="https://www.linkedin.com/in/jenny-lee-boulanger-7aa3b8b9/" target="_blank" rel="noreferrer">
            <img
              src={ linkedIn }
              alt="logotype of linkedin"
            />
          </a>
        </div>
        <div className="fixed__social">
          <a href="https://twitter.com/blngrjnn" target="_blank" rel="noreferrer">
            <img 
              src={ twitter }
              alt="logotype of twitter"
            />
          </a>
        </div>
      </div>
      <div className="fixed__contact">
      <span className="fixed__contact--blue">
        { 'const ' }
        </span>
        mail
        <span className="fixed__contact--red">
          { ' = ' }  
        </span>
        <span className="fixed__contact--yellow">
          <a href="mailto:jennblngr@gmail.com">
            'jennblngr@gmail.com'
          </a>
        </span>
        ;
      </div>
    </div>
  );
};

export default Fixed;