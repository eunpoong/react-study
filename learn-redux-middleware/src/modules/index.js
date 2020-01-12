/**
 * 18.1 작업 환경 준비 - 루트 리듀서 작성
 */

import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({ counter });

export default rootReducer;
