import 'sanitize.css/sanitize.css';
import 'react-notification-alert/dist/animate.css';

import './src/styles/nucleo-icons.css';
import './src/styles/main.scss';

import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/redux/createStore';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  const { store } = createStore();
  return <Provider store={store}>{element}</Provider>;
};
