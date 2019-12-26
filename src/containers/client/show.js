import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

import TestLayout from '../../containers/layouts/TestLayout.js';
import ShowClientPage from '../../components/client/show';
import { loadselectClients } from '../../actions/client';

/////////////////////////////////////////////////
import { closeClient } from '../../actions/client';

import Datable_Jquery from '../../assets/scripts/datatable';

class ShowClient extends Component {

  constructor(props) {
    super(props);
    //this.backpage = this.backpage.bind(this)
  }


  shouldComponentUpdate(nextProps) {
    return this.props.clientselect !== nextProps.clientselect
  }

  componentDidMount() {
    const id = this.props.params.id.replace(":", "")
    this.props.onloadclient(id)
  }

  backpage(){
    window.history.back();
  }

  editclient(){
  }

  render() {

    //const contact_data = this.props.clientselect

    //console.log(this.props.clientselect.client_data)


    return (
      this.props.clientselect.client_data.map((client) => (
          <ShowClientPage
            key={client.id}
            client={client}
            //contact={this.props.clientselect.contact_data}
            putfunction={this.editclient}
            backpage={this.backpage}
          />
      ))

    )
  }
}

const mapStatetoProps = (state)=> ({
    clientselect:state.clientselect
})

const mapDispatchtoProps = (dispatch)=> ({
  onloadclient(id){
    dispatch(loadselectClients(id))
  }
})

const ClientWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(ShowClient)
export default ClientWithConnect;
