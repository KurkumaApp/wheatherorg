import axios, { AxiosResponse } from 'axios';
import { call, put, select, takeLatest, delay } from 'typed-redux-saga';
import { ICities } from '_/types/api/ICities';
import { citiesLoaded, cityError, loadCities } from '.';
import { selectCity } from './selectors';

export function* getCities() {
  yield delay(500);

  const city: string = yield select(selectCity);
  if (city.length === 0) {
    yield put(cityError());
    return;
  }

  const requestUrl = `http://api.openweathermap.org/data/2.5/find?q=${city}&appid=7679cebcac872f7625f7fae03cb17e07&units=metric`;

  try {
    const { data }: AxiosResponse<ICities> = yield call(axios.get, requestUrl);

    if (data.count > 0) {
      yield put(citiesLoaded(data.list));
    } else {
      yield put(cityError());
    }
  } catch (error) {
    yield put(cityError());
  }
}

export function* watchSearchSaga() {
  yield takeLatest(loadCities, getCities);
}
