import React, { Component } from 'react';
//import '../../assets/scripts/';
import LoginBG from'../../assets/static/images/Marshall-Alston-Business-Meetings.jpg';

class Register extends Component {

  render() {

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

    return (
      <div className="peers ai-s fxw-nw h-100vh">
        <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={styles1}>
          <div className="pos-a centerXY">
            <div className="bgc-white bdrs-50p pos-r" style={styles2}>
              <img className="pos-a centerXY" src="assets/static/images/logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={styles3}>
          <h4 className="fw-300 c-grey-900 mB-40">Register</h4>
          <form>
            <div className="form-group">
              <label className="text-normal text-dark">Username</label>
              <input type="text" className="form-control" placeholder='John Doe' />
            </div>
            <div className="form-group">
              <label className="text-normal text-dark">Email Address</label>
              <input type="email" className="form-control" placeholder='name@email.com' />
            </div>
            <div className="form-group">
              <label className="text-normal text-dark">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label className="text-normal text-dark">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <button onClick={this.login} className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
