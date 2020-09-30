import axios from 'axios';

export const axiosReq = url =>
  axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.log(err));
