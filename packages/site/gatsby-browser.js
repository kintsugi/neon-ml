import 'react-notification-alert/dist/animate.css';
import 'sanitize.css/sanitize.css';
import 'react-toggle/style.css';

import './src/styles/nucleo-icons.css';
import './src/styles/main.scss';

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <HelmetProvider>{element}</HelmetProvider>;
};
