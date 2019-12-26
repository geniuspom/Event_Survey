import React, { Component } from 'react';

import {connect} from "react-redux";

import { loadevent, clearmonth } from '../actions/calendar';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.min.js';
import 'fullcalendar/dist/locale/th.js';
import 'fullcalendar/dist/fullcalendar.min.css';
import '../assets/styles/customs/index.scss'

import Moment from 'moment'

class Calendar extends Component {

  hide_spinner(){
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fadeOut');
    }, 1000);
  }

  getCalendar_showDate(date_value){

    Moment.locale('en')
    var todaydate = Moment(date_value).format('YYYY-MM-DD')
    return todaydate

  }

  get_all_event(todaydate){

    var thismonth = this.getCalendar_showDate(todaydate)

    if(todaydate === null){
      todaydate = $("#view_start_date").attr('start')
      thismonth = $("#view_start_date").attr('start')
    }

    Moment.locale('en')

    todaydate = this.getCalendar_showDate(todaydate)

    var day_of_weekstart = Moment(todaydate).format('d');

    var startMonth = Moment(todaydate)-(day_of_weekstart*1000*60*60*24)
    var EndMonth = Moment(startMonth)+(41*1000*60*60*24)

    startMonth = Moment(startMonth).format('YYYY-MM-DD')
    EndMonth = Moment(EndMonth).format('YYYY-MM-DD')

    var Date_select = {
      'start' : startMonth,
      'end' : EndMonth
    }
    
    this.props.onloadevent(Date_select['start'], Date_select['end'], thismonth)

  }

  callCalendar(eventsList){

    Moment.locale('en')

    var intervalStart, intervalEnd , Date_select;

    $('#full-calendar').fullCalendar('destroy')

    $('#full-calendar').fullCalendar({
      events : eventsList,

      viewRender: function(view) {
          var title = 'ตารางงานทั้งหมด : เดือน <u><b>' + view.title + '</b></u>'
          $("#full-calendar .fc-left h2").html(title)
          intervalStart = view.intervalStart
          intervalEnd = view.intervalEnd

          $("#view_start_date").attr('start',Moment(intervalStart).format('YYYY-MM-DD'))

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

    var _ = this;

    $('.fc-prev-button , .fc-today-button , .fc-next-button').click( function(){
        _.get_all_event(null)
    })

  }

componentDidMount(){

  var todaymonth = Moment().format('MM')
  var todayyear = Moment().format('YYYY')
  var todaydate = Moment(`${todayyear}-${todaymonth}-01`).format('YYYY-MM-DD')

  this.get_all_event(todaydate)

  this.hide_spinner()

}

shouldComponentUpdate(nextProps) {
  return this.props.events !== nextProps.events;
}

componentDidUpdate(){

  this.callCalendar(this.props.events)
  $('#full-calendar').fullCalendar( 'gotoDate', this.props.calendar_month )
}

render() {
  return (
      <main className='main-content bgc-grey-100'>
        <div id='mainContent'>
          <div className="row gap-20 masonry pos-r">
            <div className="masonry-item col-md-12" id="calendar_bg">

              <div id="view_start_date" start={Moment()}></div>

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
  },
  clertthismonth(){
    dispatch(clearmonth())
  }
})

const CalendarWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Calendar)
export default CalendarWithConnect;
