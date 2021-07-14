import React from 'react';

import { ReactComponent as LocationIcon } from '_/assets/location.svg';
import { LocationName } from './components/LocationName';

import { Wrapper } from './components/Wrapper';

interface WheatherLocationProps {
  city: string;
  country: string;
}

export const WheatherLocation: React.FunctionComponent<WheatherLocationProps> =
  ({ city, country }) => (
    <Wrapper>
      <div>
        <span>
          <LocationIcon />
        </span>
      </div>
      <LocationName>
        {city}, {country}
      </LocationName>
    </Wrapper>
  );
