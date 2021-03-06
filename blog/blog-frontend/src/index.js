/**
 * 24.1 작업환경 준비하기
 * 24.2 회원가입과 로그인 구현
 * 24.2.1 UI 준비하기
 * 24.2.2 리덕스로 폼 상태 관리하기
 * 24.2.3 API 연동하기
 * 24.2.4 회원가입 구현
 * 24.2.5 로그인 구현
 * 24.2.6 회원 인증 에러 처리하기
 * 24.3 헤더 컴포넌트 생성 및 로그인 유지
 * 25 프런트엔드 프로젝트: 글쓰기 기능 구현
 * 25.1 에디터 UI 구현하기
 * 25.2 에디터 하단 컴포넌트 UI 구현하기
 * 25.3 리덕스로 글쓰기 상태 관리하기
 * 26.1 포스트 읽기 페이지 구현하기
 * 26.2 포스트 목록 페이지 구현하기
 * 27.1 포스트 수정
 * 27.2 포스트 삭제
 * 27.3 react-helmet-async 로 meta 태그 설정하기
 * 27.4 프로젝트 마무리
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
