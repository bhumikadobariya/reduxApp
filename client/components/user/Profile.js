import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      errors: {},
      isLoading: false,
      invalid: false
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.setState({ username: this.props.state.user.username,
                    email: this.props.state.user.email
                });
    this.props.actions.getProfile(false, this.props.dispatch);
  }

  deleteUser() {
    this.props.actions.deleteProfile(this.props.state.auth.user.id,
      this.props.addFlashMessage({
        type: 'success',
        text: 'Your profile deleted successfully!!!'
      }),
      (err) => this.setState({ errors: err.response.data, isLoading: false }),
      this.props.logout()
    );
  }

  render () {

    let username, email;
    if(this.state.username !== undefined) {
      username = this.state.username
    } else {
      username = this.props.state.user.username
    }

    if(this.state.email !== undefined) {
      email = this.state.email
    } else {
      email = this.props.state.user.email
    }

    let hrStyle = {
      margin: '5px 0 5px 0',
    };

    return (

      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4> User Profile</h4>
          <div className="panel-body">
            <div className="box box-info" id='update_data'>
              <div className="box-body">


                <div className="clearfix"></div>
                <hr style={hrStyle} />

                <div className="col-sm-4 col-xs-6 tital"> Username: </div>
                <div className="col-sm-8 col-xs-6 "> { username } </div>
                  <div className="clearfix"></div>
                <div className="bot-border"></div>

                <div className="clearfix"></div>
                <hr style={hrStyle}/>

                <div className="col-sm-4 col-xs-6 tital"> Email: </div>
                <div className="col-sm-8 col-xs-6 "> { email } </div>
                  <div className="clearfix"></div>
                <div className="bot-border"></div>

                <div className="clearfix"></div>
                <hr style={hrStyle}/>

                <div className="action">
                  <Link to="/update-profile"><button className='btn btn-default'> Update Profile </button></Link>
                  <button className='btn btn-default' onClick={ this.deleteUser } id='deleteUser'> Delete Profile </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Profile);

