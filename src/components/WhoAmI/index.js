import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import './styles.scss';

import Title from '../../partials/Title';

import { skills } from '../../data/skills';

import {
  sectionVariants,
  itemsSectionVariants,
  inViewOptions
} from '../../animations';

const WhoAmI = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView(inViewOptions);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id="whoami" className="whoami">
      <motion.div
        className="whoami__container"
        ref={ ref }
        initial="hidden"
        animate={ controls }
        variants={ sectionVariants }
      >
        <div className="whoami__title">
          <Title number={ '00.' } text={ 'Qui suis-je ?' } />
        </div>
        <div className="whoami__content">
          <motion.div
            className="whoami__text"
            variants={ itemsSectionVariants }
          >
            Salut ! Moi, c’est Jenny-Lee, et j’aime créer du contenu vivant et inclusif sur internet. J’ai commencé à m’intéresser au développement web en 2011, lorsque je m’inscrivais sur des forums et que je proposais mon aide pour en améliorer le graphisme grâce au HTML, au CSS et au JavaScript.
            <br /> <br/>
            Même si mes études étaient plutôt orientées vers le design graphique, je ne me suis jamais vraiment éloignée du développement web, continuant de le pratiquer à titre personnel, mais aussi dans le cadre de mes cours.
            <br/> <br/>
            En 2020, j’ai commencé et terminé une formation de reconversion spécialisante dans la programmation web. Aujourd’hui, après quelques mois en freelancing, je cherche une entreprise souhaitant évoluer avec moi.
          </motion.div>
          <motion.div
            className="whoami__skills"
            variants={ itemsSectionVariants }
          >
            <div className="whoami__skills__title">
              <span className="whoami__skills__title--blue">
                const 
              </span> <span className="whoami__skills__title--green">
                Skills 
              </span> <span className="whoami__skills__title--red">
                = 
              </span> <span className="whoami__skills__title--yellow">
                () 
              </span> <span className="whoami__skills__title--blue">
                { '=> ' }
              </span>
              <span className="whoami__skills__title--yellow">
                { '{' }
              </span>
            </div>
            <div className="whoami__skills__categories">
              {
                skills.map((skill) => {
                  return (
                    <div key={skill.category }>
                      <h2 className="whoami__skills__subtitle">
                        { skill.category }
                      </h2>
                      <div className="whoami__skills__list">
                        {
                          skill.tools.map((tool) => {
                            return (
                              <div key={ 'item-' + tool.title } className="whoami__skills__item">
                                <img
                                  key={ 'item-img-' + tool.title }
                                  src={ tool.src }
                                  alt={ tool.alt }
                                /> { tool.title }
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="whoami__skills__title">
              <span className="whoami__skills__title--yellow">{ '}' }</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoAmI;