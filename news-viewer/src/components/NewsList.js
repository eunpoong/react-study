/**
 * 컴포넌트가 화면에 보이는 시점에 API를 요청할텐데
 * useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청
 *
 * 주의점. useEffect에 등록하는 함수에 async를 붙이면 안된다
 * useEffect 반환하는 값은 cleanup 함수이기 떄문
 *
 * 따라서 useEffect 내부에서 async/await 를 사용시
 * 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용
 *
 * 추가로 loading이라는 상태로 api 요청이 대기중인지 판별할 것
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  /* const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiKey = 'e9be25ff247a4d0bbafde9b2e2cef3ba';
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}${query}`
        );
        console.log(response.status);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      console.log('ok');
      setLoading(false);
    };
    fetchData();
  }, [category]); // category 값이 바뀔 때마다 뉴스 불러와야해서 useEffect의 의존배열(두번째파라미터)에 category 넣음
  */

  const [loading, response, error] = usePromise(() => {
    const apiKey = 'e9be25ff247a4d0bbafde9b2e2cef3ba';
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}${query}`
    );
  }, [category]);

  // 대기중일떄
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
