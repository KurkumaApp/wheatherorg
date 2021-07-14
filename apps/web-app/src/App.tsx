import React from 'react';

import { Layout } from './components/templates/Layout';

import GlobalStyle from './styles/global-styles';
import HomePage from './components/pages/HomePage';

import 'sanitize.css';

export const App: React.FunctionComponent = () => (
  <React.Fragment>
    <Layout>
      <HomePage />
    </Layout>
    <GlobalStyle />
  </React.Fragment>
);

export default App;
