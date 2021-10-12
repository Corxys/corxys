import React from 'react';
import { motion } from 'framer-motion';

import './styles.scss';

import { ReactComponent as GitHub } from '../../assets/svg/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';

import {
  socialsVariants, 
  emailVariants
} from '../../animations';

const Fixed = () => {
  return (
    <div
      className="fixed"
      >
      <motion.div
        className="fixed__socials"
        initial="hidden"
        animate="visible"
        variants={ socialsVariants }
      >
        <div className="fixed__social">
          <a href="https://github.com/Corxys" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
        <div className="fixed__social">
          <a href="https://www.linkedin.com/in/jenny-lee-boulanger-7aa3b8b9/" target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
        </div>
        <div className="fixed__social">
          <a href="https://twitter.com/blngrjnn" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="fixed__contact"
        initial="hidden"
        animate="visible"
        variants={ emailVariants }
      >
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
      </motion.div>
    </div>
  );
};

export default Fixed;