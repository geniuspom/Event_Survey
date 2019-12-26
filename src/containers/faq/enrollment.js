import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactJWPlayer from 'react-jw-player';

class FaqHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(event) {

      event.preventDefault();

      $(event.target).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');

  }

  render() {

    let header_topic = "การลงทะเบียนเรียน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการลงทะเบียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการลงทะเบียนเรียนได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Enroll_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/493SLSMq-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการยกเลิกหลักสูตรที่ลงทะเบียนเรียนอย่างไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการยกเลิกหลักสูตรที่ลงทะเบียนเรียนไว้ได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Cancel_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/ww1DhMCh-CjCvISKr.mp4'
                  />
                <br/>
                อย่างไรก็ตาม ผู้เรียนต้องยกเลิกก่อนกำหนดการเรียนไม่น้อยกว่า 48 ชั่วโมง
                หากมีการสำรองที่นั่งแต่ไม่เข้าเรียนหลักสูตรติดต่อกันสามครั้ง ไม่ว่าด้วยเหตุผลใดๆ เราขอสงวนสิทธิ์ระงับไม่ให้เข้าถึงเป็นเวลา 30 วัน
                ดูข้อกำหนดในการลงทะเบียนและการยกเลิกได้
                <span className="orange bold">
                  <a href='https://www.seasiacenter.com/enrollment-cancellation-policy/' target='_blank'>ที่นี่</a>
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ต้องการเปลี่ยนวันและเวลาเรียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                1.	ผู้เรียนต้องยกเลิกวันและเวลาที่ได้สำรองที่นั่งไว้ ไม่น้อยกว่า 48 ชั่วโมง<br/>
                2.	เลือกลงทะเบียนเรียนใหม่ในวันและเวลาที่ต้องการ
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">Waitlist คืออะไร และฉันจะได้รับแจ้งเตือนเมื่อไร หากเป็น waitlist</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                Waitlist หรือ Waiting List คือรายชื่อผู้เรียนสำรองในกรณีที่หลักสูตรเต็ม
                โดยระบบจะทำการแจ้งไปยังผู้เรียนสำรองล่วงหน้า 48 ชั่วโมง หากมีผู้เรียนในลำดับก่อนหน้ายกเลิก
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ต้องเตรียมอะไรบ้างตอนไปเรียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการเตรียมตัวก่อนมาเรียนได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Prepare_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/qLW62bpd-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
