import React, { Component } from 'react';
import Login from '../auth/login';
import Register from '../auth/register';

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
