/**
 * 14.1.1 콜백함수
 */
import React from 'react';

const AsyncTest = () => {
  function increase(number, callback) {
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
  });

  return <p>async test</p>;
};

export default AsyncTest;
