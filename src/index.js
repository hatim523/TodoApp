/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
  setToLS('all-themes', themes.default);
  return (
    <App />
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
