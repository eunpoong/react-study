/**
 * 12. immer 불변성 유지
 * 12.1.2 immer 사용하지 않고 불변성 유지
 * 12.1.4 immer 적용하기
 * 12.1.5 useState의 함수형 업데이트와 immer 함께 쓰기
 */

/**
 * immer의 produce 함수는 두 가지 파라미터를 받는다.
 * 첫 번째 파라미터는 수정하고 싶은 상태이고, 두 번째 파라미터는 상태를 어떻게 업데이트 할지 정의하는 함수
 * 두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성해줌
 * immer 라이브러리는 '불변성에 신셩쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것'
 *
 * immer에서 제공하는 produce 함수를 호출할 때, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환함
 */

import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    /*setForm({
        ...form,
        [name]: [value]
      });*/
    /*setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );*/
    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
      // setData({ ...data, array: data.array.concat(info) });
      /*setData(
        produce(data, draft => {
          draft.array.push(info);
        })
      );*/
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );
      setForm({ name: '', username: '' });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback(id => {
    /*setData(
      {
        ...data,
        array: data.array.filter(info => info.id !== id)
      },
      [data]
    );*/
    /*setData(
        produce(data, draft => {
          draft.array.splice(
            draft.array.findIndex(info => info.id === id),
            1
          );
        })
      );*/
    setData(
      produce(draft => {
        draft.array.splice(
          draft.array.findIndex(info => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
