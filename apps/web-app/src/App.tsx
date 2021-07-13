import React from 'react';

import { SelectList } from '_components/molecules/SelectList';

import { ReactComponent as SearchIcon } from '_assets/search.svg';

import { Layout } from './components/templates/Layout';

import GlobalStyle from './styles/global-styles';
import 'sanitize.css';
import { Search } from './components/organisms/Search';
import HomePage from './components/pages/HomePage';

export const App: React.FunctionComponent = () => (
  <React.Fragment>
    <Layout>
      <HomePage />
    </Layout>
    <GlobalStyle />
  </React.Fragment>
);

export default App;
