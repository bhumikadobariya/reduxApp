import React from 'react';
// import axios from 'axios';

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

  onSubmit(e) {
    e.preventDefault(e);
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {},
      // (err) => this.setState({ errors: err.response.data, isLoading: false })
      ( data ) => this.setState({ errors: data.response.data, isLoading: false })
    );
  }

  render () {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Us</h1>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className="form-control form-control-inline"
            placeholder="enter your name"
          />
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="form-control form-control-inline"
            placeholder="enter your email"
          />
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className="form-control form-control-inline"
            placeholder="enter your password"
          />
          {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            className="form-control form-control-inline"
            placeholder="enter your name"
          />
          {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>

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
