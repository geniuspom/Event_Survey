import React, { Component } from 'react';
import {connect} from "react-redux";

import { newevent } from '../actions/event';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

class Newevent extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  goHome(){
    location.href = "/"
  }

  goBack() {
    window.history.back();
  }

  hide_spinner(){
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1200);
  }

  handleSubmit(e){
    e.preventDefault();

    const myForm = document.getElementById('neweventform');
    const formData = new FormData(myForm);

    this.props.onsubmitform(formData)

    if(this.props.event_data.status === 'new' || this.props.event_data.status === 'Update' )
    this.goHome()
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

componentDidMount(props){
  this.hide_spinner()
}

render() {
  return (
    <div className="inside-content">
      <main className='main-content bgc-grey-100'>
        <div id='mainContent'>

          <div className="row gap-20 masonry pos-r">
            <div className="masonry-item col-md-8 offset-md-2">

          <div className="bgc-white p-20 bd">
            <div className="">
                <button onClick={() => this.goBack()} className="btn btn-outline-secondary rotate-icon"><i className='ti-control-skip-backward align-middle line-height-inherit p-2'></i><span className="p-2 align-middle">ย้อนกลับ</span></button>
            </div>

            <div className="text-center postion_relative">
              <div className="line bg-light-green"></div>
              <div className="text-with-line text-bold text-1_5 text-light-green">สร้างอีเวนต์</div>
            </div>

            <div className="booking-detail">

            <form onSubmit={this.handleSubmit} id="neweventform">

              <div className="row p-5">
                <div className="col-md-6 text-right margin-t-auto">วันที่</div>
                <div className="col-md-4">
                  <DayPickerInput
                      inputProps={{ required: true, name: 'eventdate' }}//readOnly: true,
                      formatDate={formatDate}
                      parseDate={parseDate}
                      format="L"
                      placeholder='วว/ดด/ปป'//{`${formatDate(new Date(), 'L', 'th')}`}
                      dayPickerProps={{
                        locale: 'th',
                        localeUtils: MomentLocaleUtils,
                        disabledDays: {before: new Date()},
                      }}
                      />
                </div>
              </div>


              <div className="row p-5">
                <div className="col-md-6 text-right margin-t-auto">จำนวน Capacity - Full Service</div>
                <div className="col-md-4">
                  <input required type="text" className="form-control" id="full_cap" name="full_cap" placeholder="x" value={this.state.full_cap || ''} onChange={this.handleChange}/>
                </div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right margin-t-auto">จำนวน Capacity - Program Only</div>
                <div className="col-md-4">
                  <input required type="text" className="form-control" id="program_cap" name="program_cap" placeholder="x" value={this.state.program_cap || ''} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="booking-bottun text-center p-20">
                <button type="submit" className="btn btn-outline-success">สร้างอีเวนต์</button>
              </div>

              </form>

            </div>



          </div>

</div>
</div>

        </div>
      </main>
    </div>
  )
}

}

const mapStatetoProps = (state)=> ({
    event_data:state.eventselect,
})

const mapDispatchtoProps = (dispatch)=> ({
  onsubmitform(formData){
    dispatch(newevent(formData))
  }
})

const NeweventWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Newevent)
export default NeweventWithConnect;
