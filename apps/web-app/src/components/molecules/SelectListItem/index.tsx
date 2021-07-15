import React from 'react';

import { ReactComponent as LocationCityIcon } from '_assets/location-city.svg';

import { IconContainer } from '_/components/atoms/Containers/IconContainer';

import { Wrapper } from './components/Wrapper';

interface SelectListItemProps {
  name: string;
  country: string;
  handleOnClickListItem: React.MouseEventHandler<HTMLDivElement>;
}

export const SelectListItem: React.FunctionComponent<SelectListItemProps> = ({
  name,
  country,
  handleOnClickListItem,
}) => (
  <Wrapper onClick={handleOnClickListItem}>
    <IconContainer>
      <LocationCityIcon />
    </IconContainer>
    <p>
      {name}, {country}
    </p>
  </Wrapper>
);
