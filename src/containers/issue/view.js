import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

//CSS
import '../../assets/styles/skyform/demo.css';
import '../../assets/styles/skyform/sky-forms.css';
import '../../assets/styles/skyform/sky-forms-orange.css';
import '../../assets/styles/skyform/custom.css';

import IssueView from '../../components/issue/view';
import ResponsePage from '../../components/issue/response';
import ViewMenu from '../../components/issue/viewmenu';
import ReloadData from '../../components/layouts/reloaddata';
import Modal from '../../components/issue/modal';
import { GetIssue, SubmitReply } from '../../actions/issue';

class IssueDetail extends Component {

//////////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {

    }

    this.replySubmit = this.replySubmit.bind(this)
    this.onReplyChange = this.onReplyChange.bind(this)

    this.onClickEdit = this.onClickEdit.bind(this)
    this.onClickReply = this.onClickReply.bind(this)

  }

  onClickReply(e){

    $("html, body").animate({ scrollTop: $('#ReplyForm').offset().top }, 500);

  }

  onClickEdit(e){
    alert('edit')
  }


  replySubmit(e){

    e.preventDefault();

    const reloaddata = document.getElementById('reloaddata')
    reloaddata.classList.remove('fadeOut')

    const myForm = document.getElementById('ReplyForm')
    const formData = new FormData(myForm)

    this.props.onSubmitReply(formData)

  }

  onReplyChange(e){

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

/////////////////////////////////////////////////

  componentDidMount() {

      const issue_id = this.props.match.params.id.replace(":", "")

      this.props.onLoadData(issue_id)

      //window.addEventListener("beforeunload", this.onUnload)

      const mobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)

  }

  removeReloaddata(){

    const reloaddata = document.getElementById('reloaddata')

    setTimeout(() => {
      reloaddata.classList.add('fadeOut');
    }, 1000);

  }

  componentDidUpdate(){

    /*const actionstatus = this.props.issue.status

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

    }*/

  }

  create_response(response){

    const response_filetype = response.filetype
    let response_attached
    let data = response
    const attach = response.url

    if(response_filetype != 'None'){
      if(response_filetype === 'jpg' || 'png'){
        response_attached = <a href={attach} target='_blank'><img src={attach} className='img_thumb'/></a>
      }
    }else{
      response_attached = '- None -'
    }

    return <ResponsePage key={response.response_code} ResponseData={data} ResponseAttached={response_attached}/>

  }

  render() {

    const attach = this.props.issuedata.issue_topic.url

    let issueattached

    const filetype = this.props.issuedata.issue_topic.filetype

    if(filetype != 'None'){
      if(filetype === 'jpg' || 'png'){
        issueattached = <a href={attach} target='_blank'><img src={attach} className='img_thumb'/></a>
      }
    }else{
      issueattached = '- None -'
    }

    var Response_Items = this.props.issuedata.issue_response.map(this.create_response);

    return (
      <div className='bg-yellow min-height-full'>
        <ReloadData />
        <div className='body'>
          <IssueView IssueData={this.props.issuedata} IssueAttached={issueattached} onClickEdit={this.onClickEdit} onClickReply={this.onClickReply} />
          {Response_Items}
          <ViewMenu ticket={this.props.issuedata.issue_topic.ticket} replySubmit={this.replySubmit} onReplyChange={this.onReplyChange}/>
        </div>
      </div>
    )

  }

}

const mapStatetoProps = (state)=> ({
    issuedata :state.issuedata,
})

const mapDispatchtoProps = (dispatch)=> ({

  onSubmitReply(formData){
    dispatch(SubmitReply(formData))
  },

  onLoadData(issue_id){
    dispatch(GetIssue(issue_id))
  }

})

const IssueViewWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(IssueDetail)
export default IssueViewWithConnect
