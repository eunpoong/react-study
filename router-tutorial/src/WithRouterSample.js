/**
 * 13.6.2 withRouter
 */

/*
  withRouter 함수는 HoC(Higher-order Component)

  라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체 접근 할 수 있음
*/
/*
  JSON.stringify 두번째파라미터 세번째파라미터를 null, 2 로 설정하면
  들여쓰기된 문자열로 만들어짐
*/

import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
