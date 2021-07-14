import React from 'react';
import { TempAverage } from './components/TempAverage';
import { TempMinMax } from './components/TempMinMax';
import { Wrapper } from './components/Wrapper';

interface WheatherTempProps {
  temp: number;
  tempMin: number;
  tempMax: number;
}

export const WheatherTemp: React.FunctionComponent<WheatherTempProps> = ({
  temp,
  tempMin,
  tempMax,
}) => (
  <Wrapper>
    <TempAverage>{temp}°</TempAverage>
    <TempMinMax>
      {tempMin}/{tempMax}°
    </TempMinMax>
  </Wrapper>
);
