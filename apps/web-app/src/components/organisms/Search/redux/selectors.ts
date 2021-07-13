import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '_/redux/confgureStore';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.search || initialState;

export const selectCity = createSelector(
  [selectDomain],
  (search) => search.city
);

export const selectLoading = createSelector(
  [selectDomain],
  (search) => search.loading
);

export const selectError = createSelector(
  [selectDomain],
  (search) => search.error
);

export const selectCities = createSelector(
  [selectDomain],
  (search) => search.cities
);
