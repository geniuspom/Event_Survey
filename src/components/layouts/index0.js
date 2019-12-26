import React, { Component } from 'react';
import Loader from './loader';
import Sidebar from './sidebar';
import Topbar from './topbar';
import '../../assets/scripts/';

class Layout extends Component {

  render() {
    return (
      <div>
        <Loader />
        <div>
          <Sidebar />
          <div className="page-container">
            <Topbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
