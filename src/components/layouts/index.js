import React, { Component } from 'react';
import Loader from './loader';
//import Sidebar from './sidebar';
import Sidebar from '../../containers/layouts/sidebar';
//import Topbar from './topbar';
import Topbar from '../../containers/layouts/topbar';
import '../../assets/scripts/';

const LayoutPages = () => (
      <div>
        <Loader />
        <div>
          <Sidebar />
          <div className="page-container">
            <Topbar />
          </div>
        </div>
      </div>
)

export default LayoutPages;
