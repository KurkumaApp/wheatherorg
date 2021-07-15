import React, { useEffect, useState } from 'react';

import { useSelector } from '_/redux/hooks/useSelector';
import { useDispatch } from '_/redux/hooks/useDispatch';

import { ReactComponent as SearchIcon } from '_assets/search.svg';

import { Input } from '_/components/molecules/Input';

import { Divider } from '_/components/atoms/Divider';
import { SelectListItem } from '_/components/molecules/SelectListItem';
import { loadWheatherCity } from '_/components/pages/HomePage/redux';
import { selectWheatherCitiesId } from '_/components/pages/HomePage/redux/selectors';
import { SelectList } from './components/SelectList';
import { Wrapper } from './components/Wrapper';
import { changeCity, loadCities, resetCities } from './redux';
import {
  selectCities,
  selectCity,
  selectError,
  selectLoading,
} from './redux/selectors';

export const Search: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);
  const error = useSelector(selectError);
  const cities = useSelector(selectCities);
  const loading = useSelector(selectLoading);

  const citiesId = useSelector(selectWheatherCitiesId);

  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCity(event.currentTarget.value));
    dispatch(loadCities());
  };

  const onSubmitForm = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }
  };

  const handleOnClickListItem = (id: number) => {
    if (citiesId.find((cityId) => cityId === id) === undefined) {
      dispatch(resetCities());
      dispatch(loadWheatherCity(id));
    }
  };

  useEffect(() => {
    if (city && city.trim().length > 0) {
      dispatch(loadCities());
    }
  }, []);

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
                {cities.map((item) => (
                  <li key={item.id + item.name}>
                    <SelectListItem
                      handleOnClickListItem={() =>
                        handleOnClickListItem(item.id)
                      }
                      name={item.name}
                      country={item.sys.country}
                    />
                  </li>
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
