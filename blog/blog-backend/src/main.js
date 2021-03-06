/**
 * 21. 백엔드 프로그래밍
 * 21.2 작업환경준비
 * 21.3 Koa 기본 사용법
 * 21.4 nodemon 사용하기
 * 21.5 Koa-router 사용하기
 * 22.3 mongoose의 설치 및 적용
 * 22.4 esm으로 ES 모듈 import/export 문법 사용하기
 * 22.5 데이터베이스 스키마와 모델
 * 22.7~8 데이터 생성, 조회, 삭제, 수정
 * 22.9 요청 검증
 * 22.10 페이지네이션 구현
 * 23.2 User 스키마/모델
 * 23.3 회원 인증 API 만들기
 * 23.4 토큰 발급 및 검증하기
 * 23.5 posts API 에 회원인증시스템 도입하기
 * 23.6 username/tags 로 포스트 필터링하기
 */
require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

// 비구조화 할당을 통하여 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
    //createFakeData();
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  // Not Found이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    // index.html 내용을 반환
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

// PORT 가 지정되어있지 않다면 4000 을 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
