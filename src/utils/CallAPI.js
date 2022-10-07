import axios from 'axios';

const URL_API = ''; // Url to call api

const CallAPI = (endpoint, method = 'GET', body) => {
  return axios({
    method,
    url: `${URL_API}${endpoint}`,
    data: body,
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
};

export default CallAPI;
