import React, { Component } from 'react';
import {connect} from "react-redux";

import Select from 'react-select';

import { loadtranssections, edittranssection } from '../actions/transections';

import TableRow from './tablerow'

import $ from 'jquery';

import Datable_Jquery from '../assets/scripts/datatable';

const options = [
  { value: 'Created', label: 'Created' },
  { value: 'Booking', label: 'Booking' },
  { value: 'Confirmed', label: 'Confirmed' },
  { value: 'Cancelled', label: 'Cancelled' },
  { value: 'Deleted', label: 'Deleted' }
];

class Manage extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    //console.log(this.props.data_transections)
  }

  handleSubmit(e){
    e.preventDefault();

    //const myForm = document.getElementById('newbookingform');
    //const formData = new FormData(myForm);

    //this.props.onsubmitform(formData)
    //this.handleAfterSubmit()
  }

  /*handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }*/

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  goBack() {
    window.history.back();
  }

  newevent(){
    location.href = "/newevent"
  }

  hide_spinner(){
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState){

    return this.props !== nextProps || this.state != nextState;

  }

  componentDidUpdate(){
    $('#dataTable').DataTable()
  }

componentDidMount(props){

  this.props.onloadtranssections('query')

  //$('#dataTable').DataTable()
  this.hide_spinner()

}

render() {

  //const { selectedOption } = this.state;

  if(this.props.data_transections.data_transections === undefined){
    var table = <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  }/*else{

    var table = this.props.data_transections.data_transections.map((transection) => (
      <tr key={transection.id}>
        <td>{transection.date}</td>
        <td>{transection.client_symbol}</td>
        <td>{transection.client_name}</td>
        <td>{transection.booking_type}</td>
        <td className='width-180'>

        </td>
        <td>{transection.client_contact}</td>
        <td>{transection.client_email}</td>
        <td>{transection.client_tel}</td>
        <td>{transection.register_amt}</td>
        <td>{transection.moniter_amt}</td>
      </tr>
    ))
  }*/
  else{
    var table =
    this.props.data_transections.data_transections.map((transection) => (
      <TableRow
        key={transection.id}
        data={transection}
        event={this.handleChange}
      />
    ))
  }

  return (
      <main className='main-content bgc-grey-100'>
        <div id='mainContent'>
          <div className="row gap-20 masonry pos-r">
            <div className="masonry-item col-md-12">

              <div className="bgc-white p-20 bd bd-radis">
                <div className="inline-block">
                    <button onClick={() => this.goBack()} className="btn btn-outline-secondary inline-block"><i className='ti-angle-left align-middle line-height-inherit'></i><span className="p-2 align-middle">ย้อนกลับ</span></button>
                    <div className="p-10 inline-block"></div>
                    <button onClick={() => this.newevent()} className="btn btn-outline-primary inline-block"><i className='ti-files align-middle line-height-inherit'></i><span className="p-2 align-middle">สร้างอีเวนต์</span></button>
                </div>
                <div className="text-center postion_relative">
                  <div className="line bg-light-green"></div>
                  <div className="text-with-line text-bold text-1_5 text-light-green">ข้อมูลการจอง</div>
                </div>

                <table id="dataTable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                    <thead>
                      <tr>
                        <th>Event Date</th>
                        <th>ชื่อย่อบริษัท</th>
                        <th>ชื่อบริษัท</th>
                        <th>ประเภทงาน</th>
                        <th>Status</th>
                        <th>ชื่อผู้ติดต่อ</th>
                        <th>อีเมล</th>
                        <th>เบอร์โทรติต่อ</th>
                        <th>จำนวน<br />จุดลงทะเบียน</th>
                        <th>จำนวน<br />หน้าจอแสดงผล</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Event Date</th>
                        <th>ชื่อย่อบริษัท</th>
                        <th>ชื่อบริษัท</th>
                        <th>ประเภทงาน</th>
                        <th>Status</th>
                        <th>ชื่อผู้ติดต่อ</th>
                        <th>อีเมล</th>
                        <th>เบอร์โทรติต่อ</th>
                        <th>จำนวน จุดลงทะเบียน</th>
                        <th>จำนวน> หน้าจอแสดงผล</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {table}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

}

const mapStatetoProps = (state)=> ({
    data_transections:state.transections
})

const mapDispatchtoProps = (dispatch)=> ({
  onloadtranssections(query){
    dispatch(loadtranssections(query))
  },
  onsubmitform(formData){
    dispatch(edittranssection(formData))
  }
})

const ManageWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Manage)
export default ManageWithConnect;
