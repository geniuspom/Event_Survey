import React, { Component } from 'react';
//import Loader from './loader';
//import Sidebar from './sidebar';
//import Topbar from './topbar';
//import '../../assets/scripts/';
import {connect} from "react-redux";


import LayoutPages from '../../components/layouts';

class Layout extends Component {

  render() {
    return (
      <LayoutPages />
    )
  }
}

const mapStatetoProps = (state)=> ({
    status:state.loginstatus
})

const mapDispatchtoProps = (dispatch)=> ({
  /*onLoginPages(){
    dispatch(loginpage())
  }*/
})

const LayoutWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Layout)
export default LayoutWithConnect;
