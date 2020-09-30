import axios from 'axios';

export const axiosReq = (url) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err))
};