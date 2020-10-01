import axios from 'axios';

export const axiosReq = url =>
  axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.log(err));

export const axiosPostReq = (url, options) =>
  axios
    .post(url, options)
    .then(res => res.data)
    .catch(err => console.log(err));
