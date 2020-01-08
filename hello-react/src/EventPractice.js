/**
 * 4.2 예제로 이벤트 핸들링
 * 4.2.2.1 onChange 이벤트 핸들링
 * 4.2.2.2 state 에 input 값 담기
 * 4.2.2.3 버튼 누를때 comment 값 공백으로 설정
 */

import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          onChange={e => {
            console.log(e.target.value);
            this.setState({
              message: e.target.value
            });
          }}
        />
        <button
          onClick={() => {
            console.log('before', this.state.message);
            this.setState({
              message: ''
            });
            console.log('after', this.state.message);
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
