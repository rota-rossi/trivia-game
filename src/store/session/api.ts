import axios from 'axios';
import config from '../../../config/api';

export const fetchToken = (): Promise<string> => {
  return axios
    .get(`${config.tokenEndpoint}?command=request`)
    .then(({ data }) => {
      return data.token;
    });
};

export const resetToken = (token: string) => {
  return axios
    .get(`${config.tokenEndpoint}?command=reset&token=${token}`)
    .then(({ data }) => {
      return data.token;
    });
};
