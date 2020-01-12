/**
 * 18.1 작업 환경 준비 - 루트 리듀서 작성
 * 18.3.1.4 웹 요청 비동기 작업 - 루트 리듀서 포함
 */

import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';

const rootReducer = combineReducers({
  counter,
  sample
});

export default rootReducer;
