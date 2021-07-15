import { all } from '@redux-saga/core/effects';

import { watchSearchSaga } from '_/components/organisms/Search/redux/saga';
import { watchHomePageSaga } from '_/components/pages/HomePage/redux/saga';

export function* watcherSaga() {
  yield all([watchSearchSaga(), watchHomePageSaga()]);
}
