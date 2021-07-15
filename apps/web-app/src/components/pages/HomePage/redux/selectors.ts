import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '_/redux/confgureStore';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.homePage || initialState;

export const selectWheatherCityId = createSelector(
  [selectDomain],
  (homePage) => homePage.cityId
);

export const selectWheatherCitiesId = createSelector(
  [selectDomain],
  (homePage) => homePage.citiesId
);

export const selectWheatherError = createSelector(
  [selectDomain],
  (homePage) => homePage.error
);

export const selectWheatherLoading = createSelector(
  [selectDomain],
  (homePage) => homePage.loading
);

export const selectWheatherCities = createSelector(
  [selectDomain],
  (homePage) => homePage.wheatherCities
);
