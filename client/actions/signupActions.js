import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}

export function isUserExists(identifire) {
  return dispatch => {
    return axios.get(`/api/users/${identifire}`);
  }
}
