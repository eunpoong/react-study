/**
 * 15.2 Context API 사용법 익히기
 * 15.2.3 Provider
 * 15.3 동적 Conetxt 사용하기
 * 15.3.3 색상 선택 컴포넌트 만들기
 */

/*
  Provider를 사용하면 Context의 value를 변경할 수 있다

  createContext 함수 사용할 때 파라미터로 Context의 기본값을 넣음
  이 기본값은 Provider를 사용하지 않았을 떄만 사용 됨
  Provider를 사용했는데 vlaue를 명시하지 않으면, 기본값을 사용하지 않음. 오류 발생
  따라서 Provider를 사용할 때는 value를 명시해줘야 함
*/

import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
