import request from '../utils/request';

export function query(value) {
  console.log(value)
  return request('/api/test',{
    method: 'GET',
  });
}
