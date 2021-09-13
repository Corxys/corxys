import React from 'react';
import { render } from 'react-dom';

import './styles/index.scss';

import Portfolio from './components/Portfolio';

const rootReactElement = (
  <Portfolio />
);

const target = document.querySelector('#root');

render(rootReactElement, target);