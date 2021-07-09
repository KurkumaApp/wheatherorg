import React from 'react';
import GlobalStyle from './styles/global-styles';

import 'sanitize.css';

import HomePage from './pages/HomePage';

export const App: React.FunctionComponent = () => (
  <React.Fragment>
    <HomePage />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
