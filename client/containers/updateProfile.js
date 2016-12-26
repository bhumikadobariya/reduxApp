import { connect } from 'react-redux';
import UpdateProfile from '../components/user/UpdateProfileForm';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
     state: state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ fetchUser }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);

