/* eslint-disable handle-callback-err */

import Axios from 'axios';

Axios.interceptors.request.use(request => {
  return request;
}, error => {

});

Axios.interceptors.response.use(response => {
  return response;
}, error => {

});

export default Axios;
