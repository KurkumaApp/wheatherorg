import React from 'react';

import { IndicatorTitle } from './components/IndicatorTitle';
import { IndicatorValue } from './components/IndicatorValue';
import { Wrapper } from './components/Wrapper';

interface WheatherIndicatorProps {
  title: string;
  value: string;
}

export const WheatherIndicator: React.FunctionComponent<WheatherIndicatorProps> =
  ({ title, value }) => (
    <Wrapper>
      <IndicatorTitle>{title}</IndicatorTitle>
      <IndicatorValue>{value}</IndicatorValue>
    </Wrapper>
  );
