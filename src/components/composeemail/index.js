import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
//import Site_Logo from'../../../assets/static/images/ojlogo.png';

const ComposeEmailPages = ({
  putfunction , putfunction2
}) => (
<main className='main-content bgc-grey-100'>
  <div id='mainContent'>
    <div className="full-container">
      <div className="email-app">
        <div className="email-wrapper row remain-height pos-r scrollable bgc-white">
            <div className="email-content open no-inbox-view">
              <div className="email-compose">
                <div className="d-n@md+ p-20">
                  <a className="email-side-toggle c-grey-900 cH-blue-500 td-n" href={undefined}>
                    <i className="ti-menu"></i>
                    </a>
                </div>
                <form className="email-compose-body" onSubmit={putfunction.bind(this)}>
                  <h4 className="c-grey-900 mB-20">Send Message</h4>
                    <div className="send-header">
                      <div className="form-group">
                        <input className="form-control" placeholder="Email Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name="compose" className="form-control" placeholder="Say Hi..." rows='10'></textarea>
                      </div>
                    </div>
                    <div id="compose-area"></div>
                    <div className="text-right mrg-top-30">
                      <button className="btn btn-danger">Send</button>
                    </div>
                </form>
                {/*<button onClick={putfunction2.bind(this)} className="btn btn-primary">Login</button>*/}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
)

export default ComposeEmailPages;
