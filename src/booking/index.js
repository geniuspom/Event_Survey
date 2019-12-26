import React, { Component } from 'react';

import {connect} from "react-redux";

import { loadeventselect } from '../actions/event';

class Booking extends Component {

  goBack() {
    window.history.back();
  }

  Bookprogram(){
    location.href = "/bookform/"+ this.get_id() + "/program"
  }

  Bookfull(){
    location.href = "/bookform/"+ this.get_id() + "/full"
  }

  hide_spinner(){
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
  }

  get_id(props){
    const id = this.props.match.params.id
    console.log(id)
    return id
  }

componentDidMount(props){
  this.hide_spinner()
  const event_id = this.get_id()
  this.props.onloadevent(event_id)
}

render() {

  let full_button,program_button

  if(this.props.event_data.full_avaliable > 0){
    full_button = <button onClick={() => this.Bookfull()} type='submit' className='btn btn-outline-success'>จอง Full Service</button>
  }else{
    full_button = ""
  }

  if(this.props.event_data.program_avaliable > 0){
    program_button = <button onClick={() => this.Bookprogram()} type='submit' className='btn btn-outline-info'>จอง Program Only Service</button>
  }else{
    program_button = ""
  }

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
              <div className="line bg-light-green"></div>
              <div className="text-with-line text-bold text-1_5 text-light-green">Full Service</div>
            </div>

            <div className="booking-detail">

              <div className="row p-5">
                <div className="col-md-6 text-right">Capacity (จำนวนที่รับได้) :</div>
                <div className="col-md-4">{ this.props.event_data.full_cap }</div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right">Comfirmed (จำนวนลูกค้าที่ยืนยันแล้ว) :</div>
                <div className="col-md-4">{ this.props.event_data.full_confirm }</div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right">Avaliable No (จำนวนที่ยังว่าง) :</div>
                <div className="col-md-4">{ this.props.event_data.full_avaliable }</div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right">Booking (จำนวนที่กำลังจองอยู่) :</div>
                <div className="col-md-4">{ this.props.event_data.full_booking }</div>
              </div>

            </div>

            <div className="booking-bottun text-center p-20">
              { full_button }
            </div>

            <div className="text-center postion_relative">
              <div className="line bg-light-blue"></div>
              <div className="text-with-line text-bold text-1_5 text-light-blue">Program Only Service</div>
            </div>

            <div className="text-center postion_relative text-info p-b-20">*ใช้เฉพาะโปรแกรม ฟรีอบรมการใช้งาน*</div>

            <div className="booking-detail">

              <div className="row p-5">
                <div className="col-md-6 text-right">Capacity (จำนวนที่รับได้) :</div>
                <div className="col-md-4">{ this.props.event_data.program_cap }</div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right">Comfirmed (จำนวนลูกค้าที่ยืนยันแล้ว) :</div>
                <div className="col-md-4">{ this.props.event_data.program_confirm }</div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right">Avaliable No (จำนวนที่ยังว่าง) :</div>
                <div className="col-md-4">{ this.props.event_data.program_avaliable }</div>
              </div>

              <div className="row p-5">
                <div className="col-md-6 text-right">Booking (จำนวนที่กำลังจองอยู่) :</div>
                <div className="col-md-4">{ this.props.event_data.program_booking }</div>
              </div>

            </div>

            <div className="booking-bottun text-center p-20">
              {program_button}
            </div>

          </div>

</div>
</div>

        </div>
      </main>

  )
}

}

const mapStatetoProps = (state)=> ({
    event_data:state.eventselect,
})

const mapDispatchtoProps = (dispatch)=> ({
  onloadevent(event_id){
    dispatch(loadeventselect(event_id))
  }
})

const BookingWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Booking)
export default BookingWithConnect;
