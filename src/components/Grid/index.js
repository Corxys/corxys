import React from 'react';
import { motion } from 'framer-motion';

import './styles.scss';

import {
  unfoldGrid,
  unfoldLine
} from '../../animations/grid';

const Grid = () => {
  return (
    <motion.div
      className="lines"
      initial="hidden"
      animate="visible"
      variants={ unfoldGrid }
    >
      <motion.div 
        className="line line--first"
        variants={ unfoldLine }
      />
      <motion.div 
        className="line line--second"
        variants={ unfoldLine }
      />
      <motion.div 
        className="line line--third"
        variants={ unfoldLine }
      />
      <motion.div 
        className="line line--fourth"
        variants={ unfoldLine }
      />
      <motion.div 
        className="line line--fifth"
        variants={ unfoldLine }
      />
      <motion.div 
        className="line line--sixth"
        variants={ unfoldLine }
      />
      <motion.div 
        className="line line--last"
        variants={ unfoldLine }
      />
    </motion.div>
  )
};

export default Grid;