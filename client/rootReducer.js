import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import user from './reducers/user';

const rootReducer = combineReducers({
  flashMessages,
  auth,
  user
});

export default rootReducer;
