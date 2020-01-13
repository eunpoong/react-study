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
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';

/*const html = ReactDOMServer.renderToString(
  <div>Hello Server Side rendering!</div>
);

console.log(html);*/

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(root); // 클라이언트에게 결과물을 응답
};

app.use(serverRender);

// 5000 포트로 서버를 가동
app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});
