import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class LoginPage extends React.Component {
  render () {
    return (
      <div className="row">
        <div className='col-md-4 col-md-offset-4'>
          <LoginForm isUserExists={isUserExists} userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(LoginPage);
