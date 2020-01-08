/**
 * 4.2 예제로 이벤트 핸들링
 * 4.2.2.1 onChange 이벤트 핸들링
 * 4.2.2.2 state 에 input 값 담기
 * 4.2.2.3 버튼 누를때 comment 값 공백으로 설정
 *
 * 4.2.3 임의 메서드 만들기
 * 4.2.3.1 기본방식
 *
 */

import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleClick() {
    console.log('click', this.state.message);
    this.setState({
      message: ''
    });
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
