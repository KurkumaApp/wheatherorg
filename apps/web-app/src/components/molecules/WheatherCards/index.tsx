import React from 'react';

import { Wrapper } from './components/Wrapper';
import { List } from './components/List';

export const WheatherCards: React.FunctionComponent = ({ children }) => (
  <Wrapper>
    <List>{children}</List>
  </Wrapper>
);
