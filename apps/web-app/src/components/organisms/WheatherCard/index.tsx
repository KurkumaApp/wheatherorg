import React from 'react';
import { WheatherIndicator } from '_/components/atoms/WheatherIndicator';
import { WheatherLocation } from '_/components/atoms/WheatherLocation';
import { WheatherStatus } from '_/components/atoms/WheatherStatus';
import { WheatherSync } from '_/components/atoms/WheatherSync';
import { WheatherTemp } from '_/components/atoms/WheatherTemp';
import { WheatherIndicators } from '_/components/molecules/WheatherIndicators';
import { IWheatherCity } from '_/components/pages/HomePage/redux/types';
import { CardBody } from './components/CardBody';
import { CardHeader } from './components/CardHeader';

import { Wrapper } from './components/Wrapper';

interface WheatherCardProps extends IWheatherCity {}

export const WheatherCard: React.FunctionComponent<WheatherCardProps> = ({
  id,
  name,
  country,
  status,
  temp,
  temp_min,
  temp_max,
  indicators,
  lastUpdate,
}) => {
  const handleOnClickCard = (id: number) => {
    console.log(
      'You clicked on Wheather Card. Detonation after 1 ... 2 ... 3. Blast your brain))'
    );
    console.log(`By the way, city id: ${id}.`);
  };

  const handleOnClickSync = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    console.log(event);
  };

  return (
    <Wrapper
      id={`${id}-${name}-${country}`}
      onClick={() => handleOnClickCard(id)}
    >
      <CardHeader>
        <WheatherLocation city={name} country={country} />
        <WheatherSync
          lastSync={lastUpdate}
          handleOnClickSync={handleOnClickSync}
        />
      </CardHeader>
      <CardBody>
        <WheatherStatus status={status} />
        <WheatherTemp
          temp={Math.round(temp)}
          tempMin={Math.round(temp_min)}
          tempMax={Math.round(temp_max)}
        />
        <WheatherIndicators>
          {indicators.map((indicator) => (
            <WheatherIndicator
              key={`${id}-${indicator.title}`}
              title={indicator.title}
              value={indicator.value}
            />
          ))}
        </WheatherIndicators>
      </CardBody>
    </Wrapper>
  );
};