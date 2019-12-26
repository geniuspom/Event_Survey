import React, { Component } from 'react';
import {connect} from "react-redux";

import { loadeventselect } from '../actions/event';
import { newbooking } from '../actions/booking';
import FullService from './fullservice'

import $ from 'jquery';

class Booking extends Component {

  constructor(props) {
    super(props)
    this.state = {'event_id':this.props.match.params.id,
                  'event_type':this.props.match.params.id,
                  'booking_status': false,
                  }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  goHome(){
    location.href = "/"
  }

  handleAfterSubmit(){

    //console.log(this.state.booking_status);

    if(this.props.booking.status === true){
      $('#exampleModal').modal('toggle')
    }else if(this.props.booking.status === 'error'){
      $('#ModalError_Title').html(this.props.booking.error_title)
      $('#ModalError_Text').html(this.props.booking.error_text)
      $('#ModalError').modal('toggle')
      console.log(this.props.booking.error_title);
    }else{
      $('.booking-bottun button').prop('disabled', false);
      console.log('error');
    }
  }

  handleSubmit(e){
    e.preventDefault();

    $('.booking-bottun button').prop('disabled', true);

    const myForm = document.getElementById('newbookingform');
    const formData = new FormData(myForm);

    this.props.onsubmitform(formData)

    setTimeout(() => {
      this.handleAfterSubmit()
    }, 1000);

  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  goBack() {
    window.history.back();
  }

  hide_spinner(){
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
  }

  get_id(props){
    const id = this.props.match.params.id
    return id
  }

shouldComponentUpdate(nextProps, nextState){

  if(this.state != nextState){
    if(this.props.match.params.type === 'full'){
      this.service_number = <FullService handleChange={this.handleChange} stateVal={nextState}/>
    }else{
      this.service_number = ''
    }
  }

  return this.props !== nextProps || this.state != nextState;

}

componentDidMount(props){

  this.hide_spinner()

  if(this.props.match.params.type === 'full'){
    this.typename = 'Full Service'
    this.bg_color = 'bg-light-green'
    this.text_color = 'text-light-green'
    this.service_number = <FullService handleChange={this.handleChange} stateVal={this.state}/>
  }else{
    this.typename = 'Program Only Service'
    this.bg_color = 'bg-light-blue'
    this.text_color = 'text-light-blue'
    this.service_number = ''
  }

  this.props.onloadevent(this.props.match.params.id)
}

render() {

  return (
      <main className='main-content bgc-grey-100'>
        <div id='mainContent'>

          <div className="row gap-20 masonry pos-r">
            <div className="masonry-item col-md-8 offset-md-2">

          <div className="bgc-white p-20 bd">
            <div className="">
                <button onClick={() => this.goBack()} className="btn btn-outline-secondary"><i className='ti-angle-left'></i>Go Back</button>
                <h3 className="c-grey-900 text-center">{ this.props.event_data.event_date }</h3>
            </div>

            <div className="text-center postion_relative">
              <div className={`line ${this.bg_color}`}></div>
              <div className={`text-with-line text-bold text-1_5 ${this.text_color}`}>{ this.typename }</div>
            </div>

            <div className="booking-detail">

            <form onSubmit={this.handleSubmit} id="newbookingform">

              <div className="row p-5">
                <div className="col-md-4 text-right margin-t-auto">ชื่อย่อบริษัท</div>
                <div className="col-md-6">
                  <input type="hidden" className="form-control" id="event_id" name="event_id" value={this.props.match.params.id}/>
                  <input type="hidden" className="form-control" id="event_type" name="event_type" value={this.props.match.params.type}/>
                  <input required type="text" className="form-control" id="client_symbol" name="client_symbol" placeholder="ABC" value={this.state.client_symbol || ''} onChange={this.handleChange}/>
                </div>
              </div>

              <div className="row p-5">
                <div className="col-md-4 text-right margin-t-auto">ชื่อบริษัท</div>
                <div className="col-md-6">
                  <input required type="text" className="form-control" id="client_name" name="client_name" placeholder="บริษัท เอ บี ซี จำกัด" value={this.state.client_name || ''} onChange={this.handleChange}/>
                </div>
              </div>

              <div className="row p-5">
                <div className="col-md-4 text-right margin-t-auto">เบอร์โทรติต่อ</div>
                <div className="col-md-6">
                  <input required type="text" className="form-control" id="client_tel" name="client_tel" placeholder="081xxxxxx" value={this.state.client_tel || ''} onChange={this.handleChange}/>
                </div>
              </div>

              <div className="row p-5 align-middle">
                <div className="col-md-4 text-right margin-t-auto">อีเมล</div>
                <div className="col-md-6">
                  <input required type="email" className="form-control" id="client_email" name="client_email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.client_email || ''} onChange={this.handleChange}/>
                </div>
              </div>

              <div className="row p-5">
                <div className="col-md-4 text-right margin-t-auto">ชื่อผู้ติดต่อ</div>
                <div className="col-md-6">
                  <input required type="text" className="form-control" id="client_contact" name="client_contact" placeholder="" value={this.state.client_contact || ''} onChange={this.handleChange}/>
                </div>
              </div>

              {this.service_number}

              <div className="booking-bottun text-center p-20">
                <button type="submit" className="btn btn-outline-success">บันทึกข้อมูลการจอง</button>
              </div>

              </form>

            </div>

          </div>

</div>
</div>

        </div>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ยืนยันการจอง</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div>ได้รับข้อมูลแล้ว การจองจะสมบูรณ์เมื่อมีเจ้าหน้าติดต่อกลับ หากไม่ได้รับการติดต่อกลับภายใน 2 วัน ขอให้โทรมาแจ้งที่ 089-527-5588</div>
        <div className="text-center postion_relative">
          <div className="line bg-red"></div>
          <div className="text-with-line text-red text-center">การตอบตกลงใช้บริการ </div>
        </div>
        <div className="text-red">** โอเจฯ จะให้บริการเฉพาะลูกค้าที่ตอบตกลงใช้บริการ ด้วยการเซ็นต์ใบเสนอราคาแล้วส่งกลับมาให้ทางบริษัท  เมื่อส่งอีเมล์ตอบตกลงมาแล้ว หากไม่ได้รับการติดต่อกลับภายใน 2 วัน ขอให้ติดต่อกลับทางโอเจฯ เพื่อให้มั่นใจว่า โอเจฯบันทึกบริษัทท่านลงตารางทำงานเรียบร้อยแล้ว</div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.goHome()}>ตกลง</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="ModalError" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ModalError_Title">คุณได้จองวันในเดือนนี้เกินกำหนดแล้ว</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="text-center postion_relative">
          <div className="text-red" id="ModalError_Text">หากต้องการแก้ไขวันจอง ขอให้โทรมาแจ้งที่ 089-527-5588</div>
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.goHome()}>ตกลง</button>
      </div>
    </div>
  </div>
</div>

      </main>
  )
}

}

//<button type="button" className="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
//export default Booking;

const mapStatetoProps = (state)=> ({
    event_data:state.eventselect,
    booking:state.booking,
})

const mapDispatchtoProps = (dispatch)=> ({
  onloadevent(event_id){
    dispatch(loadeventselect(event_id))
  },
  onsubmitform(formData){
    dispatch(newbooking(formData))
  }
})

const BookingWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Booking)
export default BookingWithConnect;
