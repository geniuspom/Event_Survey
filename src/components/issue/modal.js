import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
//import Site_Logo from'../../../assets/static/images/ojlogo.png';
//import ClientPage from './client'

const Modal = ({
  goHome, issue_ticket
}) => (
  <div className="modal fade" id="Modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Issue</h5>
        </div>
        <div className="modal-body">
          <div>Your Ticket is No. {issue_ticket}</div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" data-dismiss="modal" onClick={goHome}>Done</button>
        </div>
      </div>
    </div>
  </div>
)

export default Modal;
