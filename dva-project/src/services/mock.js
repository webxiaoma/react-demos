import queryString from 'query-string';
import request from '../utils/request';

export function reqPost(value) {  // post 请求
  return request('/api/test',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  });
}

export function reqGet(value) {  // get 请求
  return request(`/api/test?${queryString.stringify(value)}`,{
    method: 'GET',
  });
}
 


