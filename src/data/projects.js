import habiter from '../assets/images/habiter-project-ban.png';
import oFourneaux from '../assets/images/ofourneaux-project-ban.png';
import diceroll from '../assets/images/diceroll-project-ban.png';
import simonGame from '../assets/images/simongame-project-ban.png';
import myWebFactory from '../assets/images/mywebfactory-project-ban.png';

export const projects = [
  {
    context: 'Freelance',
    title: 'Habiter',
    description: 'Une exposition virtuelle et participative, disponible en ligne jusqu’en juin 2022. Elle rassemble divers témoignages de personnes affectées par les effets du changement climatique à travers le monde. Ma mission a consisté à développer le site à partir de la maquette proposée par le graphiste.',
    tools: [
      'React',
      'Sass',
      'Redux',
      'Framer Motion',
      'Strapi',
      'i18n',
    ],
    links: [
      {
        name: 'GitHub',
        src: 'https://github.com/Corxys/habiter-front',
      },
      {
        name: 'HTTP',
        src: 'https://habiterproject.com',
      },
    ],
    image: {
      src: habiter,
      alt: 'Image de présentation du projet Habiter',
    }
  },
  {
    context: 'Étudiante',
    title: 'O\'Fourneaux',
    description: 'Quand on a un emploi du temps charge, qu\'on commence une formation intensive de 5 mois, qu\'on est parent, ou que l\'on fait face à toute autre contrainte du quotidien, il est plus difficile de trouver le temps de réfléchir à ses repas. C\'est pourquoi je vous présente cette application génératrice de recettes, qui vous permettra d\'être plus serein et plus organisé jour après jour. (Développé en équipe, 3 dev front et 2 dev back)',
    tools: [
      'React',
      'Sass',
      'Redux',
      'Firebase',
      'Axios',
      'Slugify',
      'Commitizen',
    ],
    links: [
      {
        name: 'GitHub',
        src: 'https://github.com/Corxys/ofourneaux-post-apo',
      },
      {
        name: 'HTTP',
        src: 'https://ofourneaux.xyz/',
      },
    ],
    image: {
      src: oFourneaux,
      alt: 'Image de présentation du projet O\'Fourneaux',
    }
  },
  {
    context: 'Freelance',
    title: 'My Web Factory',
    description: 'My Web Factory est né de l\'envie d\'unir des compétences techniques et humaines pour aider des particuliers et des professionnels à avoir de la visibilité sur le web. Nous avons donc créé un collectif de freelances, et développé notre site vitrine afin de nous présenter.',
    tools: [
      'Vue.js',
      'Sass',
      'Vuex',
      'GSAP',
      'Symfony',
    ],
    links: [
      {
        name: 'HTTP',
        src: 'https://mywebfactory.fr',
      },
    ],
    image: {
      src: myWebFactory,
      alt: 'Image de présentation du projet O\'Fourneaux',
    }
  },
  {
    context: 'Étudiante',
    title: 'Diceroll',
    description: 'Un lanceur de dès tout ce qu\'il y a de plus classique, permettant de jeter jusqu\'à 10 dés, de changer le lancer de l\'un des dés et de conserver l\'historique de son dernier lancer. ',
    tools: [
      'Node.js',
      'Express',
      'Dotenv',
      'Sequelize',
      'EJS',
    ],
    links: [
      {
        name: 'GitHub',
        src: 'https://github.com/Corxys/dice-roller',
      },
      {
        name: 'HTTP',
        src: 'https://corxys-diceroll.herokuapp.com/',
      },
    ],
    image: {
      src: diceroll,
      alt: 'Image de présentation du projet Diceroll',
    } 
  },
  {
    context: 'Étudiante',
    title: 'Simon Game',
    description: 'Le Simon Game consiste à répéter la séquence de couleur que Simon va faire le plus de fois possible. Vous perdez dès lors que vous faites une erreur.',
    tools: [
      'Node.js',
      'Express',
      'Dotenv',
      'Sequelize',
      'EJS',
    ],
    links: [
      {
        name: 'GitHub',
        src: 'https://github.com/Corxys/simon-game',
      },
      {
        name: 'HTTP',
        src: 'https://corxys-simon-game.herokuapp.com/',
      },
    ],
    image: {
      src: simonGame,
      alt: 'Image de présentation du projet Simon Says',
    } 
  },
];