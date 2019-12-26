import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';
//import 'react-jqueryui';

//CSS
//import '../../assets/styles/skyform/demo.css';
//import '../../assets/styles/skyform/sky-forms.css';
//import '../../assets/styles/skyform/sky-forms-orange.css';

//import TestLayout from '../../containers/layouts/TestLayout.js';
//import IssueNew from '../../components/issue';
//import ReloadData from '../../components/layouts/reloaddata';
//import Modal from '../../components/issue/modal';
import { TestUpload } from '../../actions/issue';

//import './validate.js';

/////////////////////////////////////////////////
//import { closeClient } from '../../actions/client';

//import Datable_Jquery from '../../assets/scripts/datatable';

class Support extends Component {

//////////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      //category: 'Admin Function',
      //severity_level: 'Feature Request',
    }
    //this.onUnload = this.onUnload.bind(this) // if you need to bind callback to this
    //this.createNew = this.createNew.bind(this)
    //this.submitcreat = this.submitcreat.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.onInputChange = this.onInputChange.bind(this)
    //this.goHome = this.goHome.bind(this)
  }

  handleSubmit(e){

    e.preventDefault();

    /*const reloaddata = document.getElementById('reloaddata')
    reloaddata.classList.remove('fadeOut')*/

    const myForm = document.getElementById('IssueForm')
    const formData = new FormData(myForm)

    this.props.onSubmitForm(formData)

  }
  /*

  validate(){

    //document.getElementsByName('subject')


  }

  goHome(){
    location.href = "/"
  }

  onInputChange(e){

    e.preventDefault();

    const element = document.getElementById('file_name')

    const file = document.getElementById('file').files[0].name

    element.value = file

  }

  removeReloaddata(){

    const reloaddata = document.getElementById('reloaddata')

    setTimeout(() => {
      reloaddata.classList.add('fadeOut');
    }, 1000);

  }

  componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onUnload)
  }

/////////////////////////////////////////////////*/

  componentDidMount() {

  }

  /*componentDidUpdate(){

    const actionstatus = this.props.issue.status

    if(actionstatus != 'new'){
      this.removeReloaddata()
    }

    if(actionstatus === 'success'){

      setTimeout(() => {
        //$('#Modal').modal('toggle')
        $('#Modal').modal({backdrop: 'static', keyboard: false})
      }, 1000);

    }else if(actionstatus === 'error'){


    }else{

    }

  }*/

  render() {

    return (

      <div className='bg-yellow'>

      <div className='body'>
        <form className='sky-form'  id='IssueForm' onSubmit={this.handleSubmit} encType="multipart/form-data">
          <header>YNU Support</header>

          <fieldset>
            <section>
              <label className="label">Title / หัวข้อ</label>
              <label className="input">
                <input name='summary' type="text" required />
              </label>
            </section>

            <section>
              <label className="label">description / รายละเอียด</label>
              <label className="input">
                <input name='description' type="text" required />
              </label>
            </section>

            <section>
              <label className="label">Email address</label>
              <label className="input">
                <i className="icon-append icon-envelope-alt"></i>
                <input name='email' type="text" placeholder="" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>
              </label>
            </section>


            <section>
              <label className="label">Message</label>
              <label className="textarea textarea-resizable">
                <textarea name='message' rows="3" required></textarea>
              </label>
            </section>

            <section>
              <label className="label">File input</label>
              <label htmlFor="file" className="input input-file">
                <div className="button"><input type="file" id="file" name='file[]'  multiple />Browse</div><input id='file_name' type="text" readOnly />
              </label>
            </section>

            <section>
              <label className="label">File input</label>
              <label htmlFor="file" className="input input-file">
                <div className="button"><input type="file" id="file" name='file[]'  multiple />Browse</div><input id='file_name' type="text" readOnly />
              </label>
            </section>

            <section>
                <input ref="tooltip" type="file2" name="file2[]" multiple />
            </section>

          </fieldset>

          <footer>
            <button type="submit" className="button">Submit</button>
          </footer>

        </form>

      </div>


      </div>
        //clients={this.props.client}
        //putfunction={this.loadclient}
        //createNew={this.createNew}
      //>
    )
  }
}

const mapStatetoProps = (state)=> ({
    //client:state.client,
    //issue:state.issue
})

const mapDispatchtoProps = (dispatch)=> ({

  onSubmitForm(formData){
    dispatch(TestUpload(formData))
  }

})

  /*onloadclient(){
    dispatch(loadallClients()).then(
      $('#dataTable').DataTable().destroy()
    )
  },
  //////
  onclose(){
    dispatch(closeClient()).then(
    )
  }

})*/

const SupportWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Support)
export default SupportWithConnect
