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

    let header_topic = "บัญชีของฉัน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ไม่สามารถเข้าสู่ระบบ (Log in) ได้</a>
            <div className="cd-faq-content">
              <p>
                1. ตรวจสอบอีเมลที่ใช้เข้าระบบว่าตรงกับอีเมลที่ลงทะเบียนไว้<br/>
                2. หากยังเข้าไม่ได้ ให้กดที่ <span className="orange bold">“ลืมรหัสผ่านใช่ไหม”</span> ใส่อีเมลที่ได้ลงทะเบียนไว้<br/>
                3. ระบบจะส่งอีเมลให้ตั้งรหัสผ่านใหม่ จากนั้นลองเข้าอีกครั้ง<br/>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เปลี่ยนภาษาอย่างไร</a>
            <div className="cd-faq-content">
              <p>
                กดที่ตัวอักษร <span className="orange bold">TH/EN</span> จากเมนูบาร์ด้านบน และเลือกภาษาที่ต้องการ
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">แก้ไขข้อมูลส่วนตัวได้ที่ไหน</a>
            <div className="cd-faq-content">
              <p>
                คลิกที่รูป profile ตนเองบนเมนูบาร์ด้านมุมบนขวา เลือกที่ <span className="orange bold">“โปรไฟล์ของฉัน”</span> และแก้ไขเพิ่มเติมไปทีละหัวข้อ
                จากนั้นกด <span className="orange bold">“บันทึก”</span>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เปลี่ยน password อย่างไร</a>
            <div className="cd-faq-content">
              <p>
                คลิกที่รูป profile ตนเองตรงมุมบนขวา เลือก <span className="orange bold">“การตั้งค่าบัญชี”</span>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )
  }
}

export default FaqHome
