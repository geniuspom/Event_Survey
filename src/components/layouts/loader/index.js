import React, { Component } from 'react';
import './loader.scss';

class Loader extends Component {

  componentDidMount() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
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
      <div id='loader'>
        <div className="spinner"></div>
      </div>
    );
  }
}

export default Loader;
