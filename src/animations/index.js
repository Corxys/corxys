export const navBarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
};

export const itemsNavBarVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

export const itemsSectionVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};

export const inViewOptions = {
  rootMargin: '-100px',
  triggerOnce: true,
};

export const socialsVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: navBarVariants.visible.transition.delay + (0.3 * 4) + sectionVariants.visible.transition.delay,
    },
  },
};

export const emailVariants = {
  hidden: {
    opacity: 0,
    translateY: -20,
    rotate: -90,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    rotate: -90,
    transition: {
      type: 'spring',
      delay: navBarVariants.visible.transition.delay + (0.3 * 4) + sectionVariants.visible.transition.delay,
    },
  },
};

export const visibilityNavBarVariants = {
  hidden: {
    opacity: 0,
    y: -110.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};