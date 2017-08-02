import Http from '@/common/http';
import {API_LOGIN} from './API-URLS';

const login = (params) => {
  return Http.post(API_LOGIN, params);
};

export default login;
