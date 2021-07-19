import React from 'react';
import { useHistory } from 'react-router';
import { WheatherIndicator } from '_/components/atoms/WheatherIndicator';
import { WheatherLocation } from '_/components/atoms/WheatherLocation';
import { WheatherStatus } from '_/components/atoms/WheatherStatus';
import { WheatherSync } from '_/components/atoms/WheatherSync';
import { WheatherTemp } from '_/components/atoms/WheatherTemp';
import { WheatherIndicators } from '_/components/molecules/WheatherIndicators';
import {
  deleteWheatherCity,
  loadWheatherCity,
} from '_/components/pages/HomePage/redux';
import { IWheatherCity } from '_/components/pages/HomePage/redux/types';
import { useDispatch } from '_/redux/hooks/useDispatch';
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
  lastSync,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClickCard = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    CityId: number
  ) => {
    event.preventDefault();
    history.push(`/details/${CityId}`);
  };

  const handleOnClickSync = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (event.ctrlKey === true) {
      dispatch(deleteWheatherCity(id));
    } else {
      dispatch(loadWheatherCity(id));
    }
  };

  return (
    <Wrapper
      id={`${id}-${name}-${country}`}
      onClick={(event) => handleOnClickCard(event, id)}
    >
      <CardHeader>
        <WheatherLocation city={name} country={country} />
        <WheatherSync
          lastSync={lastSync}
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
