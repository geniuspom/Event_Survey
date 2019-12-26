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

    let header_topic = "เทคโนโลยี"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">หากเข้าชมวีดีโอไม่ได้</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                <span className="orange bold">link</span>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
