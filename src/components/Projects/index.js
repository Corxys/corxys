import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// swiper
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './styles.scss';

import Title from '../../partials/Title';

import Project from '../Project';

import { projects } from '../../data/projects';

import {
  inViewOptions,
  sectionVariants
} from '../../animations';

SwiperCore.use([Pagination]);

const Projects = () => {
  const controls = useAnimation();

  const [page, setPage] = useState(0);

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
    <section id="projects" className="projects">
      <motion.div
        className="projects__container"
        initial="hidden"
        animate={ controls }
        variants={ sectionVariants }
      >
        <div
          ref={ ref }
          className="projects__title"
        >
          <Title number={ '01.' } text={ 'Projets' } />
        </div>
        <div className="projects__content">
          <Swiper
            className="projects__content-swiper"
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={ 30 }
            onSwiper={(swiper) => {
              console.log('swiper !!!', swiper);
            }}
            onSlideChange={() => {
              console.log('slide change !!!');
            }}
          >
            {
              projects.map((project, index) => {
                return (
                  <SwiperSlide id={ 'project-' + project.id } key={ index }>
                    <Project data={ project } />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;