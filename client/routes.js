import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import newEventPage from './components/events/newEventPage';
import UpdateProfile from './components/user/UpdateProfile';
import Profile from './containers/Profile';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="new-event" component={requireAuth(newEventPage)} />
    <Route path="update-profile" component={requireAuth(UpdateProfile)} />
    <Route path="profile" component={requireAuth(Profile)} />
  </Route>
)

