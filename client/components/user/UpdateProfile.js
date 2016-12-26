import React from 'react';
// import UpdateProfileForm from './UpdateProfileForm';
import UpdateProfileForm from '../../containers/updateProfile';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';
import { fetchUser } from '../../actions/userActions';

class UpdateProfile extends React.Component {
  render() {
    const { addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className='col-md-4 col-md-offset-4'>
          <UpdateProfileForm addFlashMessage={addFlashMessage} fetchUser={fetchUser} />
        </div>
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  fetchUser: React.PropTypes.func.isRequired
}

export default connect(null, { addFlashMessage, fetchUser })(UpdateProfile);
