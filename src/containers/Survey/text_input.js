import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

//CSS

import Text_Input_Component from '../../components/Survey/text_input.js';

//import { SubmitIssue } from '../../actions/issue';

class Text_Input extends Component {

//////////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      category: 'Admin Function',
      severity_level: 'Feature Request',
    }
    //this.onUnload = this.onUnload.bind(this) // if you need to bind callback to this
    //this.createNew = this.createNew.bind(this)
    //this.submitcreat = this.submitcreat.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    //this.onInputChange = this.onInputChange.bind(this)
    //this.goHome = this.goHome.bind(this)
  }


  render() {

    return (
      <Text_Input_Component
          Name="Test_name"
          Placeholder="Place_name"
          IconName="icon-user"
          ValueType="text"
          DefaultValue="aaa"
        />

    )
  }
}

const mapStatetoProps = (state)=> ({
    client:state.client,
    issue:state.issue
})

const mapDispatchtoProps = (dispatch)=> ({

  onSubmitForm(formData){
    dispatch(SubmitIssue(formData))
  }

})

const Text_InputWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Text_Input)
export default Text_InputWithConnect
