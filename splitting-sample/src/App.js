/**
 * 19.1 자바스크립트 함수 비동기 로딩
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
//import notify from './notify';

function App() {
  const onClick = () => {
    //notify();
    import('./notify').then(result => result.default());
    /* import를 함수로 사용하면 Promise를 반환함.
       이렇게 import를 함수로 사용하는 문법은 아직 표준 자바스크립트 아님
       현재 웹팩에서 지원하고 있으므로 별도의 설정 없이 프로젝트에 바로 사용할 수 있음
    */
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
