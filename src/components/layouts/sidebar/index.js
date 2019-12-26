import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
import Site_Logo from'../../../assets/static/images/ojlogo.png';

import { Link } from 'react-router-dom'

const SidebarPages = ({
  sidebarFN
}) => (

      <div className="sidebar">
        <div className="sidebar-inner">
          {/*Sidebar Header*/}
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="/">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src={Site_Logo}  alt="" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">4OJ System</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="" className="td-n">
                    <i className="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Sidebar Menu*/}
          <ul className="sidebar-menu scrollable pos-r">
            <li className="nav-item mT-30 active">
              <Link onClick={() => sidebarFN()} className='sidebar-link' to='/'>
                <span className="icon-holder">
                  <i className="c-blue-500 ti-home"></i>
                </span>
                <span className="title">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => sidebarFN()} className='sidebar-link' to='compose_email'>
                <span className="icon-holder">
                  <i className="c-brown-500 ti-email"></i>
                </span>
                <span className="title">Compose Email / ส่งอีเมล</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => sidebarFN()} className='sidebar-link' to='calendar'>
                <span className="icon-holder">
                  <i className="c-deep-orange-500 ti-calendar"></i>
                </span>
                <span className="title">Calendar</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href={undefined}>
                <span className="icon-holder">
                  <i className="c-orange-500 ti-layout-list-thumb"></i>
                </span>
                <span className="title">Data / จัดการข้อมูล</span>
                <span className="arrow">
                  <i className="ti-angle-right"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link onClick={() => sidebarFN()} className='sidebar-link' to='client'>Client Name / รายชื่อลูกค้า</Link>
                </li>
                <li>
                  <a className='sidebar-link' href="datatable.html">Data Table</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )

export default SidebarPages;
