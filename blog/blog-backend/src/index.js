/**
 * 21. 백엔드 프로그래밍
 * 21.2 작업환경준비
 * 21.3 Koa 기본 사용법
 * 21.4 nodemon 사용하기
 */
const Koa = require('koa');

const app = new Koa();

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
