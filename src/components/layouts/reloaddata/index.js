import React, { Component } from 'react';
import './reloaddata.scss';

class Reloaddata extends Component {

  componentDidMount() {
    const reloaddata = document.getElementById('reloaddata');
    reloaddata.classList.add('fadeOut');
    //this.loader();
  }

  /*loader(){
     window.addEventListener('load', () => {
       const loader = document.getElementById('loader');
       setTimeout(() => {
         loader.classList.add('fadeOut');
       }, 300);
     });
  }*/

  render() {
    return (
      <div id='reloaddata'>
        <div className="reloaddatabg"></div>
        <div className="reloaddataspinner"></div>
      </div>
    );
  }
}

export default Reloaddata;
