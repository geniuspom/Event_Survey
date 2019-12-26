import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'

class Menu extends Component {

  render() {

    let lang = "th"

    let my_account = "บัญชีของฉัน"
    let dashboard = "แดชบอร์ดของฉัน"
    let learning_catalog = "รายการการเรียนรู้"
    let enrollment = "การลงทะเบียนเรียน"
    let community = "ชุมชน"
    let transportation = "การเดินทาง"
    let it = "เทคโนโลยี"

    if(lang === "en"){
      my_account = "My Account"
      dashboard = "Dashboard"
      learning_catalog = "Learning Catalog"
      enrollment = "Enrollment"
      community = "Community"
      transportation = "Transportation"
      it = "IT"
    }

    return (
      <div>
        <ul className="cd-faq-categories">
          <li>
            <Link to={'/my_account:' + lang}>
              {my_account}
            </Link>
          </li>
          <li>
            <Link to={'/dashboard:' + lang}>
              {dashboard}
            </Link>
          </li>
          <li>
            <Link to={'/learning_catalog:' + lang}>
              {learning_catalog}
            </Link>
          </li>
          <li>
            <Link to={'/enrollment:' + lang}>
              {enrollment}
            </Link>
          </li>
          <li>
            <Link to={'/community:' + lang}>
              {community}
            </Link>
          </li>
          <li>
            <Link to={'/transportation:' + lang}>
              {transportation}
            </Link>
          </li>
          <li>
            <Link to={'/it:' + lang}>
              {it}
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default Menu
