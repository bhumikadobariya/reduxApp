import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchUser } from '../../actions/userActions'

class UpdateProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      errors: {},
      isLoading: false,
      invalid: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault(e);

    // if(true) {                 //--------- for server side validation -----------//
    if(this.isValid()) {          //--------- for client side validation -----------//
      this.setState({ errors: {}, isLoading: true });
      console.log(this.state);
      // this.props.updateProfile(this.state);
      // .then(
      //   () => {
      //     this.props.addFlashMessage({
      //       type: 'success',
      //       text: 'You signed up successfully. Welcome!!!'
      //     });
      //     // browserHistory.push('/');
      //     this.context.router.push('/');
      //   },
      //   (err) => this.setState({ errors: err.response.data, isLoading: false })
      // );
    }
  }

  componentDidMount() {

    this.props.actions.fetchUser(false, this.props.dispatch);
  }

  render () {
    console.log("jhuhuhu", this.props.state.user.userDetail);
    // const { userDetail } = this.props.state.user.userDetail;
    // console.log("userDetail::", this.state.data);
    console.log("userDetailprops::", this.props.data);
    console.log("state::", this.state);
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Update Profile Page</h1>

        <TextFieldGroup
          type="text"
          error={errors.username}
          label="Username"
          checkUserExists={this.checkUserExists}
          onChange={this.onChange}
          value={this.props.state.user.userDetail.username}
          field="username"
          placeholder="enter your name"
        />

        <TextFieldGroup
          type="text"
          error={errors.email}
          label="Email"
          checkUserExists={this.checkUserExists}
          onChange={this.onChange}
          value={this.props.state.user.userDetail.email}
          field="email"
          placeholder="enter your email"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Update Profile
          </button>
        </div>
      </form>
    );
  }
}

UpdateProfileForm.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  fetchUser: React.PropTypes.func.isRequired
}

UpdateProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default UpdateProfileForm;

