import React, { Component } from 'react';

import {connect} from "react-redux";

import { loadevent } from '../actions/calendar';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.min.js';
import 'fullcalendar/dist/locale/th.js';
import 'fullcalendar/dist/fullcalendar.min.css';
import '../assets/styles/customs/index.scss'

import Moment from 'moment'

class Calendar extends Component {

  goBack() {
    $('#full-calendar').fullCalendar('prev')
    this.get_all_event()
    this.getMonth()
  }

  goNext() {
    $('#full-calendar').fullCalendar('next')
    this.get_all_event()
    this.getMonth()
  }

  gotoDay() {
    $('#full-calendar').fullCalendar('today')
    this.get_all_event()
    this.getMonth()
  }

  getMonth(){

    $('#Month_title h2').html($('#full-calendar .fc-left h2').html())

    $('.fc-header-toolbar').addClass('display_none')

    var currentviewdate = $('#view_start_date').attr('start')
    Moment.locale('en')

    var todaydate = Moment().format('MM')
    currentviewdate = Moment(currentviewdate).format('MM')

    if(todaydate === currentviewdate){
      $('#today_button').prop('disabled', true);
      $('#today_button').addClass('button_disable')
    }else{
      $('#today_button').prop('disabled', false);
      $('#today_button').removeClass('button_disable')
    }

  }

  hide_spinner(){
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
  }

  getCalendar_showDate(){

    Moment.locale('en')
    var currentviewdate = $('#view_start_date').attr('start')

    if(currentviewdate !== null){

      var todaydate = Moment(currentviewdate).format('YYYY-MM-DD')

    }else{

      var todaymonth = Moment().format('MM')
      var todayyear = Moment().format('YYYY')

      var todaydate = Moment(`${todayyear}-${todaymonth}`).format('YYYY-MM-DD')

    }

    return todaydate

  }

  get_all_event(){

    //alert('do')

    Moment.locale('en')

    var todaydate = this.getCalendar_showDate()

    var day_of_weekstart = Moment(todaydate).format('d');

    var startMonth = Moment(todaydate)-(day_of_weekstart*1000*60*60*24)
    var EndMonth = Moment(startMonth)+(41*1000*60*60*24)

    startMonth = Moment(startMonth).format('YYYY-MM-DD')
    EndMonth = Moment(EndMonth).format('YYYY-MM-DD')

    var Date_select = {
      'start' : startMonth,
      'end' : EndMonth
    }

    var thismonth = this.getCalendar_showDate()

    this.props.onloadevent(Date_select['start'], Date_select['end'], thismonth)

  }

  //shouldComponentUpdate(nextProps) {
    //return this.props.events !== nextProps.events;
  //}

  componentDidUpdate(){

    this.callCalendar(this.props.events)
    $('#full-calendar').fullCalendar( 'gotoDate', this.props.calendar_month )
    this.getMonth()

  }

  callCalendar(eventsList){

    Moment.locale('en')

    var intervalStart, intervalEnd , Date_select;

    //var events = this.props.events

    $('#full-calendar').fullCalendar('destroy')

    $('#full-calendar').fullCalendar({
      events : eventsList,

      viewRender: function(view) {
          var title = 'ตารางงานทั้งหมด : เดือน <u><b>' + view.title + '</b></u>'
          $("#full-calendar .fc-left h2").html(title)
          intervalStart = view.intervalStart
          intervalEnd = view.intervalEnd

          $("#view_start_date").attr('start',Moment(intervalStart).format('YYYY-MM-DD'))

          //get_start_end_week(intervalStart,intervalEnd)

        },

      //ใช้ Render title ที่เป็น html
      eventRender: function( event, element, view ) {
        var title = element.find( '.fc-title' );
        title.html( title.text() );
      },

      //เพิ่มข้อความวันที่ไม่ได้ลงไว้
      dayRender: function(date, cell) {
        cell.append('<div class="unavailable text-center">กรุณาสอบถาม<br/>ทางโทรศัพท์</div>');
      },
      //ลบข้อความวันที่ลงไว้ออก
      eventAfterAllRender: function(view) {
        var dayEvents = $('#full-calendar').fullCalendar('clientEvents', function(event) {
          if (event.end) {
            var dates = getDates(event.start, event.end);
            $.each(dates, function(index, value) {
              var td = $('td.fc-day[data-date="' + value + '"]');
              td.find('div:first').remove();
            });
          } else {
            var td = $('td.fc-day[data-date="' + event.start.format('YYYY-MM-DD') + '"]');
            td.find('div:first').remove();
            if(td.hasClass('fc-today') != true){
              td.addClass('bg-color-blue');
            }
          }
        });
      },

      displayEventTime : false,
      /*eventClick: function(event) {
        if (event.url) {
          window.open(event.url);
          return false;
        }
      },*/

      height   : 900,
      editable : true,
      header: {
        left   : 'title',
        center : '',
        right  : 'today prev,next',
      },
      lang : 'th',
    });

    //ใช้คู่กับ ลบข้อความวันที่ลงไว้ออก
    function getDates(startDate, endDate) {
      var now = startDate,
        dates = [];

      while (now.format('YYYY-MM-DD') <= endDate.format('YYYY-MM-DD')) {
        dates.push(now.format('YYYY-MM-DD'));
        now.add('days', 1);
      }
      return dates;
    };

    //แปลงวันที่เริ่มต้นและวันจบของหน้าปฏิทินที่แสดงอยู่
    /*function get_start_end_week(intervalStart,intervalEnd){
      var day_of_weekstart = new Date(intervalStart);
      var day_of_weekstart = day_of_weekstart.getDay();
      //var day_of_weekend = new Date(intervalEnd);
      //var day_of_weekend = day_of_weekend.getDay();

      var startMonth = intervalStart-(day_of_weekstart*1000*60*60*24)
      var EndMonth = startMonth+(41*1000*60*60*24)
      Moment.locale('en')

      startMonth = Moment(startMonth).format('YYYY-MM-DD')
      EndMonth = Moment(EndMonth).format('YYYY-MM-DD')

      //console.log(intervalStart.format("YYYY-MM-DD") + "," + intervalEnd.format("YYYY-MM-DD"))
      //console.log(day_of_weekstart + "," + day_of_weekend)
      //console.log('Startmonth : ' + startMonth)
      //console.log('Endmonth : ' + EndMonth)

      Date_select = {
        'start' : startMonth,
        'end' : EndMonth
      }

      return Date_select

    }*/

    //var load_data = this.get_all_event()

    var _ = this;

    $('.fc-prev-button , .fc-today-button , .fc-next-button').click( function(){
        _.get_all_event()
        _.getMonth()
    })

  }

componentDidMount(){

  /*const events = [
    {
      title  : '<div>Full Service : </div><div class="text-red"><b>เต็ม</b></div>'+
      '<div class="line-sperate bg-white"></div>'+
      '<div>Program Only : </div><div class="text-green"><b>ว่าง</b></div>'+
      '<button class="btn btn-booking">จอง</button>',
      start  : new Date(y, m, 28),
      url    : '/event:1',
      desc   : 'Google',
      bullet : 'success',
      backgroundColor : 'rgba(150,150,150, 0)',
      className : 'testclass',
    },
    {
      title  : '<div>Full Service : </div><div class="text-red"><b>เต็ม</b></div>'+
      '<div class="line-sperate bg-white"></div>'+
      '<div>Program Only : </div><div class="text-green"><b>ว่าง</b></div>'+
      '<button class="btn btn-booking">จอง</button>',
      start  : new Date(y, m, 9),
      url    : '/event:2',
      desc   : 'Google',
      bullet : 'success',
      backgroundColor : 'rgba(150,150,150, 0)',
      className : 'testclass',
    },
    {
      title  : '<div>Full Service : </div><div class="text-red"><b>เต็ม</b></div>'+
      '<div class="line-sperate bg-white"></div>'+
      '<div>Program Only : </div><div class="text-red"><b>เต็ม</b></div>',
      start  : new Date(y, m, 26),
      //url    : '/event:2',
      desc   : 'Google',
      bullet : 'success',
      backgroundColor : 'rgba(150,150,150, 0)',
      className : 'testclass',
    },
  ];*/

  this.get_all_event()

  this.callCalendar(this.props.events)

  this.hide_spinner()

}

render() {
  return (
      <main className='main-content bgc-grey-100'>
        <div id='mainContent'>
          <div className="row gap-20 masonry pos-r">
            <div className="masonry-item col-md-12" id="calendar_bg">

              <div id="view_start_date" start={Moment()}></div>
              <div id="calendar_header">
                <div id="Month_title" className='calendar_title'>
                  <h2></h2>
                </div>
                <div className='calendar_button'>
                  <button id="today_button" onClick={() => this.gotoDay()} type="button"><span>วันนี้</span></button>
                  <div className="calendar-button-group">
                    <button onClick={() => this.goBack()} type="button" className="calendar_pre" aria-label="prev">
                      <span className="fc-icon fc-icon-left-single-arrow"></span>
                    </button>
                    <button onClick={() => this.goNext()} type="button" className="calendar_next" aria-label="next">
                      <span className="fc-icon fc-icon-right-single-arrow"></span>
                    </button>
                  </div>
                </div>
                <div className="fc-clear"></div>
              </div>

              <div id="full-calendar">
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

}

const mapStatetoProps = (state)=> ({
    events:state.calendar.event,
    calendar_month:state.calendar.month
})

const mapDispatchtoProps = (dispatch)=> ({
  onloadevent(startDate, endDate, thismonth){
    dispatch(loadevent(startDate, endDate, thismonth))
  }
})

const CalendarWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Calendar)
export default CalendarWithConnect;
