import { FETCH_USER_SUCCESS, SET_FIELDS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

export default (state = [], action = {}) => {

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

    default: return state;
  }
}
