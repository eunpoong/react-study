/**
 * 20.3.1 서버 사이드 렌더링용 엔드리 만들기
 */

/*
  서버사이드 렌더링을 할 때는 서브를 위한 엔트리 파일을 만들어야 함

  서버에서 리액트 컴포넌트를 렌더링 할 때는 ReactDOMServer의 renderToString이라는 함수를 사용
  이 함수에 JSX를 넣어서 호출하면 렌더링 결과를 문자열로 반환
*/
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
  <div>Hello Server Side rendering!</div>
);

console.log(html);
