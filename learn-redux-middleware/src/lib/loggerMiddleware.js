/**
 * 18.2.1 미들웨어 만들기
 */

/*
  미들웨어는 결국 함수를 반환하는 함수를 반환하는 함수
  파라미터로 받아오는 store는 리덕스 스토어 인스턴스를,
  action은 디스패치된 액션을 가리킨다

  next 파리미터는 함수 형태이며, store.dispatch와 비슷한 역할을 한다.
  next(action)을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고,
  만약 그 다음 미들웨어가 없다면 리듀어세에 액션을 넘겨준다.
*/

/*
const loggerMiddleware = function loggerMiddleware(store) {
  return function(next) {
    return function(action){
      // 미들웨어 기본구조
    }
  }
}
*/
const loggerMiddleware = store => next => action => {
  // 미들웨어 기본구조
  console.group(action && action.type); // 액션 타ㅣ입으로 log를 그룹화함
  console.log('이전상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log('다음상태', store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
