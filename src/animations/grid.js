export const unfoldGrid = {
  hidden: {
    opacity: 0,
    height: '0%',
  },
  visible: {
    opacity: 1,
    height: '100%',
    transition: {
      type: 'spring',
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

export const unfoldLine = {
  hidden: {
    opacity: 0,
    height: '0%',
  },
  visible: {
    opacity: 1,
    height: '100%',
  }
};