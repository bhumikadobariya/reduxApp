import axios from 'axios';
import { FETCH_USER_SUCCESS, SET_FIELDS, FETCH_DELETE_USER } from './types';

export const fetchUser = ((Action) => {
  let user = true;

  if(Action == false) {
    user = false;
  }
  return function(dispatch, getState) {
    axios.get('/api/auth/updateprofile')
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, user:response.data.user })
      })
    }
});

export const setFieldValue = (field, value) => ({
  type: SET_FIELDS,
  field,
  value
});

export const userUpdateRequest = ((data) => {
  return function(dispatch, getState, options) {
    axios.post('/api/users/getUpdateProfile', data);
  }
});

export const getProfile = ((Action) => {
  return function(dispatch, getState) {
    axios.get('/api/auth/getProfile')
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, user:response.data.user })
      })
    }
});

export const deleteProfile = ((id) => {
  return function(dispatch, getState) {
    axios.delete(`/api/auth/deleteProfile/${id}`)
      .then((response) => {
        dispatch({ type: FETCH_DELETE_USER, data:response.data.message })
      })
    }
});
