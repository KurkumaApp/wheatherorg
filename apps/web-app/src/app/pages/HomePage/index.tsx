import React from 'react';
import Container from './components/Container';

import Content from './components/Content';
import Wrapper from './components/Wrapper';
import Search from './Search';

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
