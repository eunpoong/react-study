/**
 * 17.3.3 루트 리듀서 만들기
 * 리듀서를 여러개 만들었는데, 나중에 createStore 함수를 사용하여 스토어를 만들때는 리듀서를 하나만 사용해야 함
 * 그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐 주어야 하는데, 리덕스에서 제공하넌 combineReducers 유틸함수를 사용
 */

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
