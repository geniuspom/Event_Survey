import React, { Component } from 'react';
//import '../../assets/scripts/';
import LoginBG from'../../assets/static/images/Marshall-Alston-Business-Meetings.jpg';

import {connect} from "react-redux";

import { loginpage } from '../../actions/login'

import LoginPages from '../../components/login';

import { Redirect } from 'react-router-dom';

import $ from 'jquery';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  hide_spinner(){

    //$('.page-container').css("padding-left", "0px")
    $('.page-container').toggleClass('nologin');

    const loader = document.getElementById('loader')
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.status !== nextProps.status;
  }

  handleSubmit(e){

    /*this.props.onLoginPages()
    return false*/

    e.preventDefault();

    const myForm = document.getElementById('loginform');
    const formData = new FormData(myForm);

    this.props.onLoginPages(formData)

  }

  componentDidMount(props){

    this.hide_spinner()

  }

  render() {

    //const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.props.status === "Authenticated") {

      $('.page-container').toggleClass('nologin');

      if(this.props.pathname != ''){
        return <Redirect to={this.props.pathname}/>
      }else{
        return <Redirect to={'/'}/>
      }

    }

    return (
      <LoginPages gologin={this.handleSubmit} />
    )
  }
}

const mapStatetoProps = (state)=> ({
    status:state.loginstatus.status,
    pathname:state.apphistory.url_path
})

const mapDispatchtoProps = (dispatch)=> ({
  onLoginPages(formData){
    dispatch(loginpage(formData))
  }
})

const AppWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Login)
export default AppWithConnect;
