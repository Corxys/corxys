import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import './styles.scss';

import {
  itemsNavBarVariants,
  visibilityNavBarVariants
} from '../../animations';

const Header = () => {
  const { scrollY } = useViewportScroll();
  const [showHeader, setShowHeader] = useState(false);

  const navBarStyleAboveContent = {
    backgroundColor: '#272822de',
    boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.20)'
  };

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setShowHeader(false);
    } else if (
      scrollY?.current > 50
      &&
      scrollY?.current > scrollY?.prev
    ) {
      setShowHeader(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <motion.div
      className="header"
      initial="hidden"
      animate={ showHeader ? "hidden" : "visible" }
      variants={ visibilityNavBarVariants }
      style={ scrollY?.current > 200 ? navBarStyleAboveContent : '' }
    >
      <motion.div
        className="header__logo"
        variants={ itemsNavBarVariants }
      >
        <a href="#home">
          { '<' }
          <span className="header__logo--blue">
            JLB
          </span>
          { ' />' }
        </a>
      </motion.div>
      <nav className="header__navbar">
        <motion.ul
          className="header__navbar__items"
        >
          <motion.li 
            className="header__navbar__item"
            variants={ itemsNavBarVariants }  
          >
            <a href="#whoami">
              <span className="header__navbar__item--blue">
                00.
              </span> Qui suis-je ?
            </a>
          </motion.li>
          <motion.li 
            className="header__navbar__item"
            variants={ itemsNavBarVariants }  
          >
            <a href="#projects">
              <span className="header__navbar__item--blue">
                01.
              </span> Projets
            </a>
          </motion.li>
          <motion.li 
            className="header__navbar__item"
            variants={ itemsNavBarVariants }  
          >
            <a href="#contact">
              <span className="header__navbar__item--blue">
                02.
              </span> Contact
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>    
  )
};

export default Header;