import React, { Component } from 'react';
import {connect} from "react-redux";
import './versions.scss';

class Versions extends Component {

  render() {
    return (
      <div id='version_ref'>
        <div className="version_ref">{this.props.versions}</div>
      </div>
    );
  }
}

const mapStatetoProps = (state)=> ({
    versions :state.appversions.versions,
})

const VersionsWithConnect = connect(mapStatetoProps)(Versions)
export default VersionsWithConnect
