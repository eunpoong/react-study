/**
 * 18.3.1.4 웹 요청 비동기 작업
 */

import axios from 'axios';

export const getPost = id => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const getUsers = id => {
  axios.get(`https://jsonplaceholder.typicode.com/users`);
};
