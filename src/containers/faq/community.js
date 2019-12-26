import React, { Component } from 'react';
import {connect} from "react-redux";

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

    let header_topic = "ชุมชน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เมนู People (ผู้คน) ใช้ทำอะไร</a>
            <div className="cd-faq-content">
              <p>
                ช่วยให้ผู้เรียนสามารถสร้างเครือข่ายการเรียนรู้กับคนที่อยู่บนแพลตฟอร์ม YourNextU อาทิเช่น ส่งข้อความ แนะนำหลักสูตร
                หรือเชิญชวนเพื่อนที่มีความสนใจในเรื่องเดียวกันมาเข้าหลักสูตร
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
