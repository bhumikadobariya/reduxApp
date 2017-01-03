import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
    this.handleFields = this.handleFields.bind(this);
  }

  handleFields(event) {
    this.props.actions.setFieldValue(event.target.id, event.target.value);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);

    let user = {
      username: this.props.state.user.username,
      email: this.props.state.user.email
    }

    // this.props.actions.userUpdateRequest(user, this.props.dispatch);
    // if(true) {
      // this.setState({ errors: {}, isLoading: true });
      // this.props.actions.userUpdateRequest(user, () => {
      //   this.props.addFlashMessage({
      //     type: 'success',
      //     text: 'Your profile updated successfully!!!'
      //   });
      //   this.context.router.push('/');
      // },
      //   (err) => this.setState({ errors: err.response.data, isLoading: false }),
      // );
    // }

    this.props.actions.userUpdateRequest(user,
      this.props.addFlashMessage({
        type: 'success',
        text: 'Your profile updated successfully!!!'
      }),
      (err) => this.setState({ errors: err.response.data, isLoading: false }),
      this.setState(this.props.state.user),
      this.context.router.push('/profile')
    );
  }

  componentDidMount() {
    this.props.actions.fetchUser(false, this.props.dispatch);
  }

  render () {

    const { errors } = this.state;
    return (
      <form>
        <h1>Update Profile Page</h1>

        <TextFieldGroup
          type="text"
          error={errors.username}
          label="Username"
          // checkUserExists={this.checkUserExists}
          onChange={ this.handleFields }
          value={this.props.state.user.username}
          field="username"
          id="username"
          placeholder="enter your name"
        />

        <TextFieldGroup
          type="text"
          error={errors.email}
          label="Email"
          // checkUserExists={this.checkUserExists}
          onChange={ this.handleFields }
          value={this.props.state.user.email}
          field="email"
          id="email"
          placeholder="enter your email"
        />

        <div className="clearfix form-group">
          <form onSubmit={ this.handleSubmit } >
            <button className="btn btn-info btn-lg" type="submit" disabled={this.state.isLoading || this.state.invalid} >Update Profile</button>
          </form>
        </div>
      </form>
    );
  }
}

UpdateProfileForm.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  fetchUser: React.PropTypes.func.isRequired,
  setFieldValue: React.PropTypes.func.isRequired,
  userUpdateRequest: React.PropTypes.func.isRequired
}

UpdateProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default UpdateProfileForm;

