import React, { Component } from 'react';
//import '../../assets/scripts/';
import LoginBG from'../../assets/static/images/Marshall-Alston-Business-Meetings.jpg';
import Site_Logo from'../../assets/static/images/ojlogo.png';

import {
  Link
} from 'react-router-dom';

    var styles1 = {
      backgroundImage: `url(${LoginBG})`,
    };

  var styles2 = {
    width: '120px',
    height: '120px',
  };

  var styles3 = {
    minWidth: '320px',
  };

  const styles4 = {
    width: '100px',
    border: '3px solid #fff',
  };


  const LoginPages = ({
    gologin
}) => (

  <div className="peers ai-s fxw-nw h-100vh">
    <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={styles1}>
      <div className="pos-a centerXY">
        <div className="" style={styles2}>
          <img className="pos-a centerXY" src={Site_Logo} alt="" style={styles4}/>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={styles3}>
      <h4 className="fw-300 c-grey-900 mB-40">Login</h4>
      <form onSubmit={gologin} id='loginform'>
        <div className="form-group">
          <label className="text-normal text-dark">Username</label>
          <input name='email' type="email" className="form-control" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="text-normal text-dark">Password</label>
          <input name='password' type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="form-group">
          <div className="peers ai-c jc-sb fxw-nw">
            <div className="peer">
              <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c">
                  <span className="peer peer-greed">Remember Me</span>
                </label>
              </div>
            </div>
            <div className="peer">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

)

export default LoginPages;
