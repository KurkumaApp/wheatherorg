import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Search } from '_/components/organisms/Search';
import { WheatherCards } from '_/components/molecules/WheatherCards';

import { WheatherCard } from '_/components/organisms/WheatherCard';
import { useSelector } from '_/redux/hooks/useSelector';
import Container from './components/Container';
import Content from './components/Content';
import Wrapper from './components/Wrapper';
import { selectWheatherCities } from './redux/selectors';

export const HomePage: React.FunctionComponent = () => {
  const wheatherCities = useSelector(selectWheatherCities);

  return (
    <Wrapper>
      <Content>
        <Container>
          <Search />
          <WheatherCards>
            {wheatherCities.map((wheatherCity) => (
              <li key={wheatherCity.id}>
                <WheatherCard {...wheatherCity} />
              </li>
            ))}
          </WheatherCards>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default HomePage;
