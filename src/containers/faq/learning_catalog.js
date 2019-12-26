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

    let header_topic = "รายการการเรียนรู้"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการค้นหาหลักสูตร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการค้นหาหลักสูตรได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Learning_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/01Wn3yI6-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการให้คะแนนและแสดงความคิดเห็นต่อหลักสูตร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการให้คะแนนและแสดงคิดเห็นต่อหลักสูตรได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Rating_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/z7C5366C-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เรียนแล้วได้ประกาศนียบัตรทุกหลักสูตรหรือไม่</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                หลักสูตรที่เรียนแล้วได้รับประกาศนียบัตร จะอยู่ในเมนูด้านซ้ายมือที่ชื่อว่า <span className="orange bold">&#34;ประกาศนียบัตร&#34;</span>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
