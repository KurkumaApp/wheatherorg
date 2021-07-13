import React, { useEffect, useState } from 'react';

import { useSelector } from '_/redux/hooks/useSelector';
import { useDispatch } from '_/redux/hooks/useDispatch';

import { ReactComponent as SearchIcon } from '_assets/search.svg';

import { Input } from '_/components/molecules/Input';

import { Divider } from '_/components/atoms/Divider';
import { IconContainer } from '_/components/atoms/Containers/IconContainer';
import { ReactComponent as LocationCityIcon } from '_assets/location-city.svg';
import { SelectList } from './components/SelectList';
import { Wrapper } from './components/Wrapper';
import { changeCity, loadCities } from './redux';
import {
  selectCities,
  selectCity,
  selectError,
  selectLoading,
} from './redux/selectors';

interface SelectListItemProps {
  name: string;
  country: string;
}

const SelectListItem: React.FunctionComponent<SelectListItemProps> = ({
  name,
  country,
}) => (
  <li>
    <IconContainer>
      <LocationCityIcon />
    </IconContainer>
    <p>
      {name}, {country}
    </p>
  </li>
);

export const Search: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);
  const error = useSelector(selectError);
  const cities = useSelector(selectCities);
  const loading = useSelector(selectLoading);

  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCity(event.currentTarget.value));
    dispatch(loadCities());
  };

  const onSubmitForm = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    if (city && city.trim().length > 0) {
      dispatch(loadCities());
    }
  });

  return (
    <Wrapper>
      <form onSubmit={onSubmitForm}>
        <Input
          type="text"
          placeholder="example: London"
          onChange={onChangeCity}
          value={city}
        >
          <SearchIcon />
        </Input>
        {city.length > 0 ? (
          <SelectList>
            <Divider />
            {cities.length > 0 ? (
              <ul>
                {cities.map((city) => (
                  <SelectListItem
                    key={city.id}
                    name={city.name}
                    country={city.sys.country}
                  />
                ))}
              </ul>
            ) : loading ? (
              <p className="message loading">Loading 🥱</p>
            ) : (
              <p className="message error">{error}</p>
            )}
          </SelectList>
        ) : null}
      </form>
    </Wrapper>
  );
};
