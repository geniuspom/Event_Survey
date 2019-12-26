import React, { Component } from 'react';
import {connect} from "react-redux";

import '../assets/styles/customs/managebar.scss'

import { logoutSite } from '../actions/logout';

class Managebar extends Component {

GoManage(){
  location.href = '/manage'
}

GoHome(){
  location.href = '/'
}

Logout(){

  var user_token = this.props.user_token

  //location.href = '/'
  this.props.onclicklogout(user_token)
}

render() {

  if(this.props.status === "Authenticated"){
    var logoutbar = <div id="logout-bar">
                      <a onClick={() => this.Logout()} href={undefined} className="btn btn-primary theme-switcher-2 tooltip-button align-middle" data-placement="left" title="" data-original-title="Color schemes and layout options">
                        <i className="ti-power-off align-middle"></i>
                      </a>
                    </div>
  }else{
    var logoutbar = ""
  }

  return (
    <div>
      <div id="manage-bar" className="admin-options">
          <a onClick={() => this.GoManage()} href={undefined} className="btn btn-primary theme-switcher tooltip-button align-middle" data-placement="left" title="" data-original-title="Color schemes and layout options">
              <i className="ti-settings icon-spin align-middle"></i>
          </a>
      </div>
      <div id="home-bar">
          <a onClick={() => this.GoHome()} href={undefined} className="btn btn-primary theme-switcher-2 tooltip-button align-middle" data-placement="left" title="" data-original-title="Color schemes and layout options">
              <i className="ti-home align-middle"></i>
          </a>
      </div>
      {logoutbar}
    </div>
  )
}

}

const mapStatetoProps = (state)=> ({
  status:state.loginstatus.status,
  user_token:state.loginstatus.data.accessToken
})

const mapDispatchtoProps = (dispatch)=> ({
  onclicklogout(user_token){
    dispatch(logoutSite(user_token))
  },
})


const ManagebarWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Managebar)
export default ManagebarWithConnect;

//export default Managebar;
