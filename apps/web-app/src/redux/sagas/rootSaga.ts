import { all } from '@redux-saga/core/effects';

import { watchSearchSaga } from '_/components/organisms/Search/redux/saga';

export function* watcherSaga() {
  yield all([watchSearchSaga()]);
}
