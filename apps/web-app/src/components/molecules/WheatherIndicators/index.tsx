import React from 'react';

import { Wrapper } from './components/Wrapper';

export const WheatherIndicators: React.FunctionComponent = ({ children }) => (
  <Wrapper>
    <ul>{children}</ul>
  </Wrapper>
);
