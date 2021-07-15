import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICity } from '_/types/api/ICity';

interface SearchState {
  city: string;
  loading: boolean;
  error: string | null;
  cities: Array<ICity>;
}

export const initialState: SearchState = {
  city: '',
  loading: false,
  error: null,
  cities: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    loadCities: (state) => {
      state.loading = true;
      state.error = null;
      state.cities = [];
    },
    citiesLoaded: (state, action: PayloadAction<ICity[]>) => {
      state.loading = false;
      state.cities = action.payload;
    },
    cityError: (state) => {
      state.error = 'City with this name was not found 😭';
      state.loading = false;
    },
    resetCities: (state) => {
      state.city = '';
      state.cities = [];
      state.error = null;
      state.loading = false;
    },
  },
});

export const { changeCity, loadCities, citiesLoaded, cityError, resetCities } =
  searchSlice.actions;

export default searchSlice.reducer;
