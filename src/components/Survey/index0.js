import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
import Site_Logo from'../../assets/register_template/image/SEAC logo.png';
//import ClientPage from './client'

import { withTranslation } from 'react-i18next';

const SurveyPage = ({
  handleSubmit, onInputChange, category, severity_level,
}) => (
    <div>
      <form className="sky-form" role="form" method="POST" action="{{ url('cee_register') }}">
        <header>
          <div className="text-center">
            <img src={Site_Logo} width="150px"/>
          </div>
          <div className="text-center">
            
          </div>
        </header>

        <fieldset>
          <section>
            <div className="text-center">
              Thank you for registering to participate in this learning event. Please complete the fields below. We will accept applicants on a first-come-first-served basis. Following your registration we will contact you within 7 days to confirm your participation
            </div>
          </section>
        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="first_name" placeholder="First name" type="text" value="" />

              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="last_name" placeholder="Last name" type="text" value="" />

              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-6">
              <label className="select">
                <select name="age">
                  <option value="0" >Age</option>
                  <option value="15" >15</option>
                  <option value="16" >16</option>
                </select>

                <i></i>
              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="gender">
                  <option value="0" >Gender</option>
                  <option value="1" >Male</option>
                  <option value="2" >Female</option>
                </select>

                <i></i>
              </label>
            </section>
          </div>
        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-12">
              <label className="input">
                <i className="icon-prepend icon-university"></i>
                <input name="university" placeholder="University" type="text" value="" />

              </label>
            </section>
          </div>
          <div className="row">
            <section className="col col-6">
              <label className="input">
              <input name="faculty" placeholder="Faculty" type="text" value="" />

              </label>
            </section>
            <section className="col col-6">
              <label className="input">
              <input name="major" placeholder="Major" type="text" value="" />

              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="Year_of_college">
                  <option value="0" >Year of college</option>
                  <option value="1" >Freshman (ปีหนึ่ง)</option>
                  <option value="2" >Sophomore (ปีสอง)</option>
                  <option value="3" >Junior (ปีสาม)</option>
                  <option value="4" >Senior (ปีสี่)</option>
                </select>

                <i></i>
              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="English_Proficiency">
                  <option value="0" >English Proficiency</option>
                  <option value="1" >Fair</option>
                  <option value="2" >Good</option>
                  <option value="3" >Excellent</option>
                </select>

                <i></i>
              </label>
            </section>
          </div>
        </fieldset>

        <fieldset>

          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-mobile-phone"></i>
                <input name="mobile" placeholder="Mobile Phone" type="tel" value="" />

              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-phone"></i>
                <input name="line_id" placeholder="Line ID" type="text" value="" />

              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-envelope-alt"></i>
                <input name="email" placeholder="E-mail" type="email" value="" />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>

              </label>
            </section>
            <section className="col col-6">
              <label className="input" >
                <i className="icon-prepend icon-envelope-alt"></i>
                <input name="email_confirmation" placeholder="Confirm E-mail" type="email" value="" />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>

              </label>
            </section>
          </div>

        </fieldset>

        <footer>
          <button type="submit" className="button">Submit</button>
        </footer>
      </form>
    </div>
  )

export default SurveyPage;
