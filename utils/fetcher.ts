import axios from 'axios';

export const fetcher = (url: string, token: string = '', params = {}) => {
  console.log('Fetcher callled!', url);
  if (typeof token === 'object') {
    return axios.get(url, { params }).then((res) => res.data);
  }
  return axios
    .get(url, {
      params,
      headers: token ? { authorization: `Bearer ${token}` } : {},
    })
    .then((res) => res.data);
};
