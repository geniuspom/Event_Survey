import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

import TestLayout from '../../containers/layouts/TestLayout.js';
import ClientPages from '../../components/client';
import { loadallClients } from '../../actions/client';

/////////////////////////////////////////////////
import { closeClient } from '../../actions/client';

import Datable_Jquery from '../../assets/scripts/datatable';

class Client extends Component {

//////////////////////////////////////////////////

  constructor(props) {
    super(props);
    this.onUnload = this.onUnload.bind(this) // if you need to bind callback to this
    this.createNew = this.createNew.bind(this)
    this.submitcreat = this.submitcreat.bind(this)
}

createNew(){
  
}

submitcreat(){

}

onUnload(event) { // the method that will be used for both add and remove event
    //event.returnValue = "Hellooww"
    this.props.onclose()
}

componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onUnload)
  }

/////////////////////////////////////////////////

  shouldComponentUpdate(nextProps) {
    return this.props.client !== nextProps.client
  }

  componentDidMount() {
      this.props.onloadclient()
      window.addEventListener("beforeunload", this.onUnload)
      //$('#dataTable').DataTable()
  }

  componentDidUpdate(){
    $('#dataTable').DataTable()
  }

  loadclient = (e) => {
    this.props.onloadclient()
  }

  render() {

    return (
      <ClientPages
        clients={this.props.client}
        putfunction={this.loadclient}
        createNew={this.createNew}
      />
    )
  }
}

const mapStatetoProps = (state)=> ({
    client:state.client
})

const mapDispatchtoProps = (dispatch)=> ({
  onloadclient(){
    dispatch(loadallClients()).then(
      $('#dataTable').DataTable().destroy()
    )
  },
  //////
  onclose(){
    dispatch(closeClient()).then(
    )
  }

})

const ClientWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Client)
export default ClientWithConnect;
