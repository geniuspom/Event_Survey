import React, { Component } from 'react';

import Site_Logo from'../assets/static/images/ojlogo.png';

class Headersite extends Component {

render() {
  return (
    <header>
      <img src={Site_Logo}  alt="" id="site-logo"/>
      <div className="site_Title align-middle" >ระบบจองใช้บริการ</div>
    </header>
  )
}

}

export default Headersite;
