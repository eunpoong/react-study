/**
 * 18.1 작업 환경 준비 - 루트 리듀서 작성
 * 18.3.1.4 웹 요청 비동기 작업 - 루트 리듀서 포함
 *
 * 18.3.2.2 Redux-saga - 루트 리듀서
 */

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할
  yield all([counterSaga()]);
}

export default rootReducer;
