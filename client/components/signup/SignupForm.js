import React from 'react';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Us</h1>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-4">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              className="form-control form-control-inline"
              placeholder="enter your name"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Email</label>
          <div className="col-sm-4">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              className="form-control form-control-inline"
              placeholder="enter your email"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Password</label>
          <div className="col-sm-4">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              className="form-control form-control-inline"
              placeholder="enter your password"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Password Confirmation</label>
          <div className="col-sm-4">
            <input
              type="text"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.onChange}
              className="form-control form-control-inline"
              placeholder="enter your name"
            />
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

export default SignupForm;
