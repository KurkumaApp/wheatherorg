import React from 'react';
import styled from 'styled-components';

import { Search } from '_/components/organisms/Search';
import { WheatherCards } from '_/components/molecules/WheatherCards';

import { WheatherCard } from '_/components/organisms/WheatherCard';
import Container from './components/Container';
import Content from './components/Content';
import Wrapper from './components/Wrapper';

export const HomePage: React.FunctionComponent = () => (
  <Wrapper>
    <Content>
      <Container>
        <Search />
        <WheatherCards>
          <WheatherCard
            id={690791}
            name="London"
            country="GB"
            status="Clouds"
            temp={21.15}
            temp_min={21.15}
            temp_max={21.15}
            indicators={[
              { title: 'Pressure', value: '1016hpa' },
              { title: 'Clouds', value: '0 %' },
              { title: 'Wind', value: '2.22 m/s' },
            ]}
            lastUpdate={1626305941}
          />
        </WheatherCards>
      </Container>
    </Content>
  </Wrapper>
);

export default HomePage;
