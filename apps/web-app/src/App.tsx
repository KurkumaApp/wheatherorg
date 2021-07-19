import React from 'react';

import { Redirect, Route, Switch } from 'react-router';
import { Layout } from './components/templates/Layout';

import GlobalStyle from './styles/global-styles';
import HomePage from './components/pages/HomePage';

import 'sanitize.css';
import DetailsPage from './components/pages/DetailsPage';
import NotFoundPage from './components/pages/NotFoundPage';

export const App: React.FunctionComponent = () => (
  <React.Fragment>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
    <GlobalStyle />
  </React.Fragment>
);

export default App;
