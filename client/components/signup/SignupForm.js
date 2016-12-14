import React from 'react';
// import axios from 'axios';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
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
      this.props.userSignupRequest(this.state).then(
        () => {},
        // (err) => this.setState({ errors: err.response.data, isLoading: false })
        ( data ) => this.setState({ errors: data.response.data, isLoading: false })
      );
    }
  }

  render () {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Us</h1>

        <TextFieldGroup
          type="text"
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
          placeholder="enter your name"
        />

        <TextFieldGroup
          type="text"
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
          placeholder="enter your email"
        />

        <TextFieldGroup
          type="password"
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          placeholder="enter your password"
        />

        <TextFieldGroup
          type="password"
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          placeholder="enter your password confirmation"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
