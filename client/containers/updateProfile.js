import { connect } from 'react-redux';
import UpdateProfile from '../components/user/UpdateProfileForm';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
     state: state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);

