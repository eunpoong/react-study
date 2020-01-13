/**
 * 19.1 자바스크립트 함수 비동기 로딩
 * 19.2 React.lazy 와 Suspense를 통한 컴포넌트 코드 스플리팅
 * 19.2.1 state를 사용한 코드 스플리팅
 * 19.2.2 React.lazy와 Suspense 사용하기
 */
import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
//import notify from './notify';

const SplitMe = React.lazy(() => import('./SplitMe'));

/*function App() {
  const onClick = () => {
    //notify();
    import('./notify').then(result => result.default());
    /* import를 함수로 사용하면 Promise를 반환함.
       이렇게 import를 함수로 사용하는 문법은 아직 표준 자바스크립트 아님
       현재 웹팩에서 지원하고 있으므로 별도의 설정 없이 프로젝트에 바로 사용할 수 있음
    * /
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}*/

/*class App extends Component {
  state = {
    SplitMe: null
  };
  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default
    });
  };
  render() {
    const { SplitMe } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}*/

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
