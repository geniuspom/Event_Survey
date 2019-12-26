import React, { Component } from 'react';
import {connect} from "react-redux";
import {
  Route,
  Redirect,
} from 'react-router-dom';

import Loader from '../../components/layouts/loader';
import Sidebar from '../../containers/layouts/sidebar';
import Topbar from '../../containers/layouts/topbar';
import '../../assets/scripts/';

class TestLayout extends Component {

  render(props) {

    const ComponentRender =  this.props.component

      return <Route render={(props) => (
        <div>
          <Loader />
          <div>
            <Sidebar />
            <div className="page-container">
              <Topbar />
              <ComponentRender {...this.props} />
            </div>
          </div>
        </div>
      )}/>

  }
}

const mapStatetoProps = (state)=> ({
    status:state.loginstatus
})

const mapDispatchtoProps = (dispatch)=> ({
  /*onLoginPages(){
    dispatch(loginpage())
  }*/
})

const LayoutWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(TestLayout)
export default LayoutWithConnect;
