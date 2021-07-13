import React from 'react';

import { Search } from '_/components/organisms/Search';

import Container from './components/Container';

import Content from './components/Content';
import Wrapper from './components/Wrapper';

export const HomePage: React.FunctionComponent = () => (
  <Wrapper>
    <Content>
      <Container>
        <Search />
      </Container>
    </Content>
  </Wrapper>
);

export default HomePage;
