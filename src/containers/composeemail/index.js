import React, { Component } from 'react';
//import Loader from './loader';
//import Sidebar from './sidebar';
//import Topbar from './topbar';
//import '../../assets/scripts/';
import {connect} from "react-redux";


import TestLayout from '../../containers/layouts/TestLayout.js';
import ComposeEmailPages from '../../components/composeemail';

class ComposeEmail extends Component {

  sendemail = (e) => {
    //this.props.onLoginPages()
    e.preventDefault();
  }
  sendemail2 = (e) => {
    //this.props.onLoginPages()

  }

  /*render() {
    return (
      <TestLayout component={ComposeEmailPages}
        putfunction={this.sendemail}
        putfunction2={this.sendemail2}
        />
    )
  }*/
  render() {
    return (
      <ComposeEmailPages
        putfunction={this.sendemail}
        putfunction2={this.sendemail2}
        />
    )
  }

}

const mapStatetoProps = (state)=> ({
    //status:state.loginstatus
})

const mapDispatchtoProps = (dispatch)=> ({
  /*onLoginPages(){
    dispatch(loginpage())
  }*/
})

const ComposeEmailWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(ComposeEmail)
export default ComposeEmailWithConnect;
