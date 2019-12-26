import React, { Component } from 'react';
import {connect} from "react-redux";

import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

import { loadtranssections, edittranssection } from '../actions/transections';

import TableRow from './tablerow'

import $ from 'jquery';

import Datable_Jquery from '../assets/scripts/datatable';

//

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import Moment from 'moment'

//

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
      value : '',
      transection_id : '',
      before_value : '',
      from: undefined,
      to: undefined,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);

  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (Moment(to).diff(Moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  handleCancel(){

    $('select[name='+ this.state.transection_id +']').val(this.state.before_value);
    $('.selectpicker').selectpicker('refresh')

  }

  handleSubmit(e){
    e.preventDefault()

    const formData = new FormData();

    formData.append('id', this.state.transection_id);
    formData.append('value', this.state.value);

    this.props.onsubmitform(formData)

    location.reload()

    //this.handleAfterSubmit()
  }

  handleChange = (selectedOption) => {
    var options = selectedOption.target.options
    /*var value = []
                  for (var i = 0, l = options.length; i < l; i++) {
                    if (options[i].selected) {
                      value.push(options[i].value)
                    }
                  }*/

    var row_id = selectedOption.target.name

    var value = ""

    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value = options[i].value
      }
    }

    this.setState({
      value : value,
      transection_id : row_id,
      before_value : $('#select_'+row_id).html(),
    });

    var eventDate = ' วันที่ : ' + $('#' + row_id + " > td:nth-child(1)").html()
    var Company = 'ของบริษัท : ' + $('#' + row_id + " > td:nth-child(2)").html()
    var Status = ' เปลี่ยนสถานะเป็น : ' + value
    $('#chenge_detail').html(Company + eventDate + Status)
    $('#exampleModal').modal('toggle')
  }

  Filter_Date(){

    var fromMonth = Moment($( "input[name='query_from']" ).val()).format("MM")
    var fromYear = Moment($( "input[name='query_from']" ).val()).format("YYYY")
    var fromDay = Moment($( "input[name='query_from']" ).val()).format("DD")

    var toMonth = Moment($( "input[name='query_end']" ).val()).format("MM")
    var toYear = Moment($( "input[name='query_end']" ).val()).format("YYYY")
    var toDay = Moment($( "input[name='query_end']" ).val()).format("DD")

    var from = Moment(`${fromYear}-${fromMonth}-${fromDay}`).format('YYYY-DD-MM')
    var to = Moment(`${toYear}-${toMonth}-${toDay}`).format('YYYY-DD-MM')

    var query_from = Moment(from).format("X")
    var query_end = Moment(to).format("X")

    var query = query_from + ":" + query_end

    console.log(query);

    this.props.onloadtranssections(query)

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

    $('#dataTable').DataTable( {
      retrieve: true,
        scrollX: true,
    } )

    $('.selectpicker').selectpicker()

  }

componentDidMount(props){

  var query_from = Moment($( "input[name='query_from']" ).val()).format("X")
  var query_end = Moment($( "input[name='query_end']" ).val()).format("X")

  //var query_from = Moment($( "input[name='query_from']" ).val()).unix()
  //var query_end = Moment($( "input[name='query_end']" ).val()).unix()

  var query = query_from + ":" + query_end

  this.props.onloadtranssections(query)

  this.hide_spinner()

  $('.selectpicker').selectpicker()



}

render() {

  console.log(this.state);

  const { from, to } = this.state;
  const modifiers = { start: from, end: to };

  /*if(from === undefined && to === undefined){

    var month = Moment().format('MM')
    var year = Moment().format('YYYY')

    //from = Moment(`${year}-${month}-01`).format('DD/MM/YYYY')
    //to = Moment(`${year}-${month}-31`).format('DD/MM/YYYY')

  }*/


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

                  <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="L"
          formatDate={formatDate}
          parseDate={parseDate}
          inputProps={{
            name: 'query_from',
          }}
          dayPickerProps={{
            locale: 'th',
            localeUtils: MomentLocaleUtils,
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            format="L"
            formatDate={formatDate}
            parseDate={parseDate}
            inputProps={{
              name: 'query_end',
            }}
            dayPickerProps={{
              locale: 'th',
              localeUtils: MomentLocaleUtils,
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        <button onClick={() => this.Filter_Date()} className="btn btn-outline-secondary inline-block"><i className='align-middle'></i><span className="p-2 align-middle">Filter</span></button>
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


        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">ยืนยันการแก้ไขข้อมูล</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                ยืนยันการเปลี่ยนข้อมูล <div id="chenge_detail"></div>
              </div>


              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.handleCancel}>ยกเลิก</button>
                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.handleSubmit}>ตกลง</button>
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
