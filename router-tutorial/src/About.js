/**
 * 13.4.2 URL 쿼리
 */
import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 문자열 앞 ? 생략
  });
  const showDetail = query.detail === 'true'; // 쿼리파싱 결과값은 문자열

  return (
    <div>
      <h1>About</h1>
      <p>About is ...{showDetail}</p>
      {showDetail && <p>detail 값을 true로 설정했으니 보임</p>}
    </div>
  );
};
export default About;
