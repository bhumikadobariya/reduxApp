import axios from 'axios';

export function userSignupRequest(userData) {
  console.log(userData);
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}
