/**
 * 4.2 예제로 이벤트 핸들링
 * 4.2.2.1 onChange 이벤트 핸들링
 * 4.2.2.2 state 에 input 값 담기
 * 4.2.2.3 버튼 누를때 comment 값 공백으로 설정
 *
 * 4.2.3 임의 메서드 만들기
 * 4.2.3.1 기본방식
 * 4.2.4 input 여러개
 */

import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };
  /*
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
  */
  /*
  메서드 바인딩은 생성자 메서드에서 하는것이 정석
  but, 새 메서드 만들 때마다 constructor도 수정해야 함

  바벨의 transform-class-properties 문법 사용하여 화살표 함수 형태로 메서드를 만들면 편하다
 */
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    console.log('click', this.state.username, this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
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
