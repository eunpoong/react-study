import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

/*
  액션 생성 함수에 파라미터를 필요로 한다는 점이 counter와 다르다

  createAction 으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용함

  const MY_ACTION = 'sample/MY_ACTION';
  const myAction = createAction(MY_ACTION);
  const action = myAction('hello world);
  // 결과 : { type : MY_ACTION, payload: 'hello world' }

  액션 생성 함수에서 받오온 파라미터를 그대로 payload에 넣는 것이 아니라
  변형을 주어서 넣고 싶다면 createAction의 두 번째 함수에 payload를 정의하는 함수를 따로 선언해서 넣으면 됨

  const MY_ACTION = 'sample/MY_ACTION';
  const myAction = createAction(MY_ACTION, text => `${text}!`);
  const action = myAction('hello world);
  // 결과 : { type : MY_ACTION, payload: 'hello world!' }

*/

// 액션 생성 함수 만들기
/*export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});*/
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해짐
/*export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});*/
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false
}));

/*export const toggle = id => ({
  type: TOGGLE,
  id
});*/
export const toggle = createAction(TOGGLE, id => id);

/*export const remove = id => ({
  type: REMOVE,
  id
});*/
export const remove = createAction(REMOVE, id => id);

/*
  insert 함수의 경우 todo 객체를 액션 객체 안에 넣어 주어야 하기 때문에 두번째 파라미터에 text를 넣으면 todo 객체가 반환되는 함수를 넣음

  나머지 함수에는 text => text 또는 id => id 와 같은 형태로 파라미터를 그대로 반환하는 함수를 넣음
  이 작업은 필수는 아님. 생략해도 똑같이 작동하짐나, 이 함수를 넣어 줌으로써 코드를 보았을 때
  이 액션 생성 함수의 파라미터로 어떤 값이 필욯자니 쉽게 파악할 수 있음
*/

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false }
  ]
};

/*function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}*/
/*const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload
    }),
    [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload)
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.id)
    })
  },
  initialState
);*/
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      })
  },
  initialState
);

export default todos;
