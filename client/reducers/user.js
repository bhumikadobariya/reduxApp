import { FETCH_USER_SUCCESS, SET_FIELDS, FETCH_DELETE_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  user: {},
  data: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_USER_SUCCESS:
      // return [
      //   ...state,
      //   {
      //     type: action.type,
      //     userDetail: action.data
      //   }
      // ];
      return Object.assign({}, state, action.user);

    case SET_FIELDS:
      state[action.field] = action.value;
      return Object.assign({}, state, { state });

    case FETCH_DELETE_USER:
      return Object.assign({}, state, action.data);

    default: return state;
  }
}
