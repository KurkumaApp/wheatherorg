import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWheatherCity } from './types';

export interface HomePageState {
  cityId: number | null;
  citiesId: number[];
  wheatherCities: IWheatherCity[];
  loading: boolean;
  error: string | null;
}

export const initialState: HomePageState = {
  cityId: null,
  citiesId: [],
  wheatherCities: [],
  loading: false,
  error: null,
};

const homePageSclice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    loadWheatherCity: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.cityId = action.payload;
      state.error = null;
    },
    wheatherCityLoaded: (state, action: PayloadAction<IWheatherCity>) => {
      if (state.citiesId.includes(action.payload.id)) {
        state.wheatherCities.map((wheatherCity) =>
          wheatherCity.id === state.cityId
            ? Object.assign(wheatherCity, action.payload)
            : wheatherCity
        );
      } else {
        state.wheatherCities.push(action.payload);
        state.citiesId.push(action.payload.id);
      }

      state.loading = false;
      state.cityId = null;
    },
    wheatherCityError: (state) => {
      state.loading = false;
      state.error = 'When trying to get wheather city, something went wrong 🙄';
    },
    deleteWheatherCity: (state, action: PayloadAction<number>) => {
      const index = state.wheatherCities.findIndex(
        (item) => item.id === action.payload
      );
      const indexCityId = state.citiesId.findIndex(
        (item) => item === action.payload
      );

      if (index !== -1 && indexCityId !== -1) {
        state.wheatherCities.splice(index, 1);
        state.citiesId.splice(indexCityId, 1);
      } else {
        console.log(
          'I don’t know how you did it, but you cannot delete non-existent elements'
        );
      }
    },
  },
});

export const {
  loadWheatherCity,
  wheatherCityLoaded,
  wheatherCityError,
  deleteWheatherCity,
} = homePageSclice.actions;

export default homePageSclice.reducer;
