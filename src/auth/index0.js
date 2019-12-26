import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import {connect} from "react-redux";

const mapStatetoProps = (state)=> ({
    status:state.loginstatus
})


class PrivateRoute extends Component {

  render(props){
       if (this.props.status === true){
         return <Route render={(props) => (<this.props.component {...props} />)}/>
       }else{
         return <Redirect to={{
             pathname: '/login',
             state: { from: this.props.location }
           }} />
       }
    }

}

const AuthConnect = connect(mapStatetoProps)(PrivateRoute)
export default AuthConnect;
