/**
 * 3.4 state
 * 3.4.1 클래스형 컴포넌트의 state
 * 3.4.1.1 state 여라 값
 */

import React, { Coponent, Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }
  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>

        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
