/**
 * 14.1.1 콜백함수
 * 14.1.2 Promise - ES6
 * 14.1.3 async/await - ES2017(ES8)
 */

/*
  async/await는 Promise를 더욱 쉽게 사용할 수 있도록...

  함수 앞에 async 키워드 추가, 함수 내부에서 Promise의 앞 부분에 await 키워드를 사용
  이렇게 하면 Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있다
*/
import React from 'react';

const AsyncTest = () => {
  /*function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  // callback hell...
  console.log('작업 시작');

  increase(0, result => {
    console.log('1', result);

    increase(result, result => {
      console.log('2', result);

      increase(result, result => {
        console.log('3', result);

        increase(result, result => {
          console.log('4', result);
          console.log('작업완료');
        });
      });
    });
  });*/

  function increase(number) {
    const promise = new Promise((resolve, reject) => {
      // resolve는 성공, reject는 실패
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          // 50보다 높으면 에러 발생시키기
          const e = new Error('NumberTooBig');
          return reject(e);
        }
        resolve(result); // number 값에 + 10 후 성공 처리
      }, 1000);
    });
    return promise;
  }

  /*increase(0)
    .then(number => {
      // Promise에서 resolve 된 값은 .then 을 통해 받아올 수 있음
      console.log(number);
      return increase(number); // Promise를 리턴하면
    })
    .then(number => {
      // 또 .then 으로 처리 가능
      console.log(number);
      return increase(number);
    })
    .then(number => {
      // 또 .then 으로 처리 가능
      console.log(number);
      return increase(number);
    })
    .then(number => {
      // 또 .then 으로 처리 가능
      console.log(number);
      return increase(number);
    })
    .then(number => {
      // 또 .then 으로 처리 가능
      console.log(number);
      return increase(number);
    })
    .then(number => {
      // 또 .then 으로 처리 가능
      console.log(number);
      return increase(number);
    })
    .catch(e => {
      // 도중 에러가 발생한다면 .catch를 통해 알 수 있음
      console.log(e);
    });
  */

  async function runTasks() {
    // try/catch 구문 사용하여 에러를 처리
    try {
      let result = await increase(0);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  runTasks();

  return <p>async test</p>;
};

export default AsyncTest;
