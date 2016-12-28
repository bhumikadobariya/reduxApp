import React from 'react';
// import UpdateProfileForm from './UpdateProfileForm';
import UpdateProfileForm from '../../containers/updateProfile';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';
import { fetchUser, setFieldValue, userUpdateRequest } from '../../actions/userActions';
import { isUserExists } from '../../actions/signupActions';

class UpdateProfile extends React.Component {
  render() {
    const { addFlashMessage, isUserExists, setFieldValue, userUpdateRequest } = this.props;
    return (
      <div className="row">
        <div className='col-md-4 col-md-offset-4'>
          <UpdateProfileForm addFlashMessage={addFlashMessage} fetchUser={fetchUser} setFieldValue={ setFieldValue } isUserExists={ isUserExists } userUpdateRequest={userUpdateRequest} />
        </div>
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  fetchUser: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired,
  setFieldValue: React.PropTypes.func.isRequired,
  userUpdateRequest: React.PropTypes.func.isRequired
}

export default connect(null, { addFlashMessage, fetchUser, setFieldValue, isUserExists, userUpdateRequest })(UpdateProfile);
