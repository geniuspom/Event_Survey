import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import {connect} from "react-redux";

import { authcheck } from '../actions/auth';

import { setapphistory } from '../actions/apphistory'

class PrivateRoute extends Component {

  componentDidMount(props){

    var user_token = this.props.user_token

    this.props.authcheckrender(user_token)

console.log(this.props.location.pathname);

    this.props.sethistory(this.props.location.pathname)

  }

  render(props){

    //console.log(this.props)

    const params = this.props.computedMatch.params

    const ComponentRender =  this.props.component

    {/*var json = JSON.parse(localStorage["persist:root"]);

      console.log(json.loginstatus)*/}

       if (this.props.status === "Authenticated"){
         return <Route render={(props) => (<ComponentRender {...props} params={params}/>)}/>
       }else{
         return <Redirect to={{
             pathname: '/login',
           }} />
       }
    }

}

const mapStatetoProps = (state)=> ({
    //status:true
    status:state.loginstatus.status,
    user_token:state.loginstatus.data.accessToken,
    pathname:state.apphistory.url_path
})

const mapDispatchtoProps = (dispatch)=> ({
  authcheckrender(user_token){
    dispatch(authcheck(user_token))
  },
  sethistory(apphistorypath){
    dispatch(setapphistory(apphistorypath))
  }
})

const AuthConnect = connect(mapStatetoProps,mapDispatchtoProps)(PrivateRoute)
export default AuthConnect;
