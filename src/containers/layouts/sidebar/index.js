import React, { Component } from 'react';
import '../../../assets/styles/index.scss';
import $ from 'jquery';
import {connect} from "react-redux";

import SidebarPages from '../../../components/layouts/sidebar';

class Sidebar extends Component {

  sidebarFN(){

    setTimeout(function() {

      // Sidebar Activity Class
      const sidebarLinks = $('.sidebar').find('.sidebar-link');

      sidebarLinks.each((index, el) => {
          $(el).removeClass('active');
        })
        .filter(function () {
          const href = $(this).attr('href');
          const pattern = href[0] === '/' ? href.substr(1) : href;
          return pattern === (window.location.pathname).substr(1);
        })
        .addClass('active');

    }, 100);


    $('.sidebar .sidebar-menu li a').on('click', function () {
      const $this = $(this);

      if ($this.parent().hasClass('open')) {
        $this
          .parent()
          .children('.dropdown-menu')
          .slideUp(200, () => {
            $this.parent().removeClass('open');
          });
      } else {
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('.dropdown-menu')
          .slideUp(200);

        $this
          .parent()
          .parent()
          .children('li.open')
          .children('a')
          .removeClass('open');

        $this
          .parent()
          .parent()
          .children('li.open')
          .removeClass('open');

        $this
          .parent()
          .children('.dropdown-menu')
          .slideDown(200, () => {
            $this.parent().addClass('open');
          });
      }
    });



  }

  componentDidMount(){
    // Sidebar links

    this.sidebarFN()

  }

  render() {
    if(this.props.status != "Unauthenticated"){

      return (
        <SidebarPages sidebarFN={this.sidebarFN}/>
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
  /*onLogoutSite(){
    dispatch(logoutSite())
  }*/
})


const SidebarWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Sidebar)
export default SidebarWithConnect;
