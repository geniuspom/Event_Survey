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

    let header_topic = "แดชบอร์ดของฉัน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">Point และ Badge คืออะไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                <span className="orange bold">Point</span> คือคะแนนจากการที่ผู้เรียนเข้าไปทำกิจกรรมในระบบ อาทิเช่น การเข้าระบบ การลงทะเบียนเรียน การเข้าเรียน การแนะนำหลักสูตรให้เพื่อน
                Badge คือ เหรียญตราเพื่อแสดงถึงความสำเร็จตามลำดับขั้นของคะแนน<br/>
              </p>
                <p className="indent"><span className="orange">&#9655;</span> 25 คะแนน ได้ Badge U Start<br/></p>
                <p className="indent"><span className="orange">&#9655;</span> 50 คะแนน ได้ Badge U Roll<br/></p>
                <p className="indent"><span className="orange">&#9655;</span> 100 คะแนน ได้ Badge U Rock<br/></p>
                <p className="indent"><span className="orange">&#9655;</span> 250 คะแนน ได้ Badge U Amaze<br/></p>
                <p className="indent"><span className="orange">&#9655;</span> 500 คะแนน ได้ Badge U Topia<br/></p>
            </div>
          </li>
        </ul>

      </div>
    )
  }
}

export default FaqHome
