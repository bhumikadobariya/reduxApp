import { FETCH_USER_SUCCESS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  userDetail: {}
}

export default (state = initialState, action = {}) => {

  switch(action.type) {
    case FETCH_USER_SUCCESS:
      console.log("reducers", action);
      // return [
      //   ...state,
      //   {
      //     type: action.type,
      //     userDetail: action.data
      //   }
      // ];
      return Object.assign({}, state, { userDetail: action.data});
    default: return state;
  }
}
