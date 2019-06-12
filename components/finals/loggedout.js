import React, { Component } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';

class LoggedOut extends Component {

  state = {
    login: false
  }

  render() {
    return (
      this.state.login ? <Login /> : <Register />
    )
  }
}

export default LoggedOut;
