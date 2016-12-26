import axios from 'axios';
import { FETCH_USER_SUCCESS } from './types';

export const fetchUser = ((Action) => {
  let user = true;

  if(Action == false) {
    user = false;
  }
  return function(dispatch, getState) {
    axios.get('/api/auth/updateprofile')
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, data:response.data.user })
      })
    }
});

