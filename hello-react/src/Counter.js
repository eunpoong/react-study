/**
 * 3.4 state
 * 3.4.1 클래스형 컴포넌트의 state
 * 3.4.1.1 state 여라 값
 * 3.4.1.2 state 를 constructor에서 꺼내기
 * 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
 */

import React, { Coponent, Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>

        <button
          // onClick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
            // 위 코드 아래코드 똑같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
