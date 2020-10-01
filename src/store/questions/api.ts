import axios from 'axios';
import config from '../../../config/api';

export const fetchQuestions = (token: string) => {
  return axios.get(`${config.apiEndpoint}&token=${token}`).then(({ data }) => {
    return data.results;
  });
};
