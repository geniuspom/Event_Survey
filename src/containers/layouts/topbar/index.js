import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from "react-redux";

import TopbarPages from '../../../components/layouts/topbar';

import { logoutSite } from '../../../actions/logout'

import '../../../assets/styles/customs/4oj.scss'

class Topbar extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.Sidebartoggle = this.Sidebartoggle.bind(this)
    this.gologout = this.gologout.bind(this)
  }

  Sidebartoggle(e){
    // ٍSidebar Toggle
    //$('.sidebar-toggle').on('click', e => {
      $('.app').toggleClass('is-collapsed');
      //e.preventDefault();
    //});

    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    //$('#sidebar-toggle').click(e => {
      //e.preventDefault();
      setTimeout(() => {
        window.dispatchEvent(window.EVENT);
      }, 300);
    //});
  }

  shouldComponentUpdate(nextProps) {
    return this.props.status !== nextProps.status;
  }

  componentDidUpdate(){

    $('.search-toggle').on('click', e => {
      $('.search-box, .search-input').toggleClass('active');
      $('.search-input input').focus();
      e.preventDefault();
    });

  }

  componentDidMount(){

    /*$('.search-toggle').on('click', e => {
      $('.search-box, .search-input').toggleClass('active');
      $('.search-input input').focus();
      e.preventDefault();
    });*/

  }

  gologout = () => {
    this.props.onLogoutSite()
    return false
  }

  render() {

    if(this.props.status != "Unauthenticated"){

      return (
        <TopbarPages gologout={this.gologout} Sidebartoggle={this.Sidebartoggle}/>
      )

    }else{

      return (<div></div>)

    }

  }
}

const mapStatetoProps = (state)=> ({
    status:state.loginstatus.status,
})

const mapDispatchtoProps = (dispatch)=> ({
  onLogoutSite(){
    dispatch(logoutSite())
  }
})


const TopbarWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Topbar)
export default TopbarWithConnect;
