import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

//CSS
import '../../assets/styles/customs/radios.scss';

import SurveyPage from '../../components/Survey';

import { SubmitRegister } from '../../actions/register';

import Radios from '../../components/Survey/radio';

import JSon_Data from '../../json/question';

const questions = JSon_Data.questions

class Survey extends Component {

//////////////////////////////////////////////////

  constructor(props) {

    let filter_questions = questions.filter((question) => question.status == "true" );

    super(props)
    this.state = {
      category: 'Admin Function',
      severity_level: 'Feature Request',
      value: '',
      currentPage: 1,
      QuestionPerPage: 10,
      lastPage: 1,
      currentPage_Data: filter_questions,
      AllPage_Data: filter_questions,
      question_Shuffle: true,
      Answer: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.goHome = this.goHome.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.onselect = this.onselect.bind(this)

    this.onNextPage = this.onNextPage.bind(this)
  }

  onNextPage = e => {

    e.preventDefault();

    if(this.state.currentPage != this.state.lastPage){
      this.setState({
        currentPage: Number(this.state.currentPage + 1)
      });
    }

    this.setQuestion();

    const myForm = document.getElementById('assesment_form')
    const formData = new FormData(myForm)

    let Answer = this.state.Answer;



    for (var pair of formData.entries()) {
      Answer[pair[0]] = pair[1];
        //console.log(pair[0]+ ' - ' + pair[1]);
    }

    this.setState({
      Answer: Answer
    });

    console.log(this.state.Answer);

  }

  handleChange = event => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({ value });
  };

  handleSubmit = e => {

    e.preventDefault();

    /*let checkedValue = [];
    let inputElements = document.getElementsByClassName('Checkbox_YNU');
    for(var i=0; inputElements[i]; ++i){
          if(inputElements[i].checked){
               checkedValue.push(inputElements[i].value)
          }
    }

    let status = this.validate();

    console.log(status);*/


    const myForm = document.getElementById('assesment_form')
    const formData = new FormData(myForm)

    for (let i = 1; i <= 35; i++)
    {
      console.log("Q"+ i +" : "+formData.get('Q-'+i));
    }


    /*for (var value of formData.values()) {
      console.log(value);
    }*/

    //this.props.onSubmitForm(formData)

  }

  validate = () => {

    let status = true
    let error = null

    //Check YNU Checkbox_YNU
    let YNUinputElements = document.getElementsByClassName('Checkbox_YNU');
    for(var i=0; YNUinputElements[i]; ++i){
          if(YNUinputElements[i].checked){
              if(YNUinputElements[i].value === "Other, please specifiy free text"){
                status = false
              }
          }
    }



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

/////////////////////////////////////////////////

  componentDidMount() {
      //this.props.onloadclient()
      window.addEventListener("beforeunload", this.onUnload)
      //$('#dataTable').DataTable()
      this.setQuestion();

      this.shuffle_question();

  }

  componentDidUpdate(){

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

  }

  onselect = event => {

//get parent selected node
    let thisNode = event.currentTarget
    let parentNode = thisNode.parentNode

//get selected node number
    let node_no = parentNode.className;
    node_no = node_no.split("-");
    node_no = parseInt(node_no[1]);

//get root node
    let rootNode = parentNode.parentNode

//For Remove colour all Node
    for (let i = 0; i < 6; i++)
    {
      rootNode.childNodes[i].childNodes[1].style.backgroundColor = "";
    }

//For Hilight selected node
    for (let i = node_no; i > 0; --i)
    {
      parentNode.childNodes[1].style.backgroundColor = "transparent";
      parentNode = parentNode.nextSibling;
    }

  }

  shuffle_arr(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  setLastPage(pageNumbers){
    this.setState({
      lastPage: Number(pageNumbers[pageNumbers.length-1])
    });
  }

  shuffle_question(){

    let filter_questions = this.state.AllPage_Data;

    let question_Shuffle = this.state.question_Shuffle;

    if(question_Shuffle == true){
      this.shuffle_arr(filter_questions);
    }

    this.setState({
      AllPage_Data: filter_questions
    });


  }

  setQuestion(){

    const { currentPage, QuestionPerPage } = this.state

    let filter_questions = this.state.AllPage_Data;

    /*const indexOfLastQuestion = currentPage * QuestionPerPage;

    const indexOfFirstQuestion = indexOfLastQuestion - QuestionPerPage;

    const currentPage_Data = filter_questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    this.setState({
      currentPage_Data: currentPage_Data
    });*/


    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filter_questions.length / QuestionPerPage); i++) {
        pageNumbers.push(i);
    }

    this.setLastPage(pageNumbers);

  }

  render() {

    let filter_questions = this.state.AllPage_Data;

    const { currentPage, QuestionPerPage } = this.state

    const indexOfLastQuestion = currentPage * QuestionPerPage;

    const indexOfFirstQuestion = indexOfLastQuestion - QuestionPerPage;

    const currentPage_Data = filter_questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const Button = () =>
    {

      let button_render;

      if(this.state.currentPage != this.state.lastPage){
        button_render = <button onClick={this.onNextPage}>Next</button>;
      }else{
        button_render = <button onClick={this.handleSubmit}>Save</button>;
      }

      return(
          button_render
      );
    }

    return (

      <div>
        <div>Please select scale each statement that reflects how accurately the statement describes you.</div>
        <form id="assesment_form">
          <div>Change-Readiness Scale: 1 = Not Like Me 6 = Exactly Like Me</div>
          {
            currentPage_Data.map((filter_question, index) => (
                <Radios key={filter_question.id} firstquestion={indexOfFirstQuestion + index + 1} data={filter_question} onselect={this.onselect} lang="EN" index={index}/>
            ))
          }
          <label>{this.state.currentPage} / {this.state.lastPage}</label>
          <br/>
          <Button/>
        </form>
      </div>

    )
  }
}

const mapStatetoProps = (state)=> ({
    client:state.client,
    issue:state.issue
})

const mapDispatchtoProps = (dispatch)=> ({

  onSubmitForm(formData){
    dispatch(SubmitRegister(formData))
  }

})

const SurveyWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Survey)
export default SurveyWithConnect
