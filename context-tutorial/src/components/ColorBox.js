/**
 * 15.2.2 Consumer 사용하기
 */

/*
  ColorContext 안에 들어있는 색상을 보여주려 한다.
  색상을 props 로 받아오는 것이 아니라 ColorContext 안에 들어있는 Consumer라는 컴포넌트를 통해 색상을 조회할 것이다

*/

import React from 'react';
import { ColorConsumer } from '../contexts/color';

/*
  Function as a child  또는 Render Props
  -  Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣음

*/
const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
