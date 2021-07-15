import axios, { AxiosResponse } from 'axios';
import { call, put, select, takeLatest, delay, all } from 'typed-redux-saga';
import { loadWheatherCity, wheatherCityError, wheatherCityLoaded } from '.';
import { selectWheatherCitiesId, selectWheatherCityId } from './selectors';
import { IWheatherCity, IWheatherCityResponse } from './types';

export function* getWheatherCity() {
  yield delay(500);

  const cityId: string = yield select(selectWheatherCityId);
  if (cityId === null) {
    yield put(wheatherCityError());
    return;
  }

  const requestUrl = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=7679cebcac872f7625f7fae03cb17e07&units=metric`;

  try {
    const response: AxiosResponse<IWheatherCityResponse> = yield call(() =>
      axios.get<IWheatherCity>(requestUrl)
    );

    if (response.status === 200) {
      const data: IWheatherCity = {
        id: response.data.id,
        country: response.data.sys.country,
        lastSync: new Date(),
        name: response.data.name,
        status: 'Clouds',
        temp: response.data.main.temp,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
        indicators: [
          { title: 'Pressure', value: `${response.data.main.pressure}hpa` },
          { title: 'Clouds', value: `${response.data.clouds.all} %` },
          { title: 'Wind', value: `${response.data.wind.speed} m/s` },
        ],
      };

      yield put(wheatherCityLoaded(data));
    } else {
      yield put(wheatherCityError());
    }
  } catch (error) {
    yield put(wheatherCityError());
  }
}

export function* watchHomePageSaga() {
  yield all([takeLatest(loadWheatherCity, getWheatherCity)]);
}
