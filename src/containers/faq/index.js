import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class FaqHome extends Component {

  render() {

    return (
      <Redirect to='/my_account:th' />
    )
  }
}

export default FaqHome
