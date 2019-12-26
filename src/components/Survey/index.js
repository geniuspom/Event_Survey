import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Site_Logo from'../../assets/register_template/image/SEAC logo.png';

import Year_values from '../../json/List.js';

import {Province} from '../../json/province.js';

import Autocomplete from 'react-autocomplete'

import AutocompleteContainer from '../../containers/Survey/AutocompleteContainer'

function Page(props) {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
    let Province_List = Province('en')
  };

  const textStyle = {
    padding:'0 0 10px 0',
    color: '#fff',
    cursor: 'pointer',
  };

  let Full_Date = new Date();
  let Min_Year = Full_Date.getFullYear() - 80;
  let Max_Year = Full_Date.getFullYear() - 10;

  let Province_List = Province(i18n.language)

  //let Province_List = Province(i18n.language)

  return (
    <div>
        <div className="text-center" style={textStyle}>
          <a className="" onClick={() => changeLanguage('th')}>ภาษาไทย</a>
          &nbsp;|&nbsp;
          <a className="" onClick={() => changeLanguage('en')}>English</a>
        </div>
      <form className="sky-form" role="form" method="POST" onSubmit={props.handleSubmit} id="IssueForm">
        <header>
          <div className="text-center">
            <img src={Site_Logo} width="150px"/>
          </div>
          <div className="text-center">
            {t('title')}
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
                <i className="icon-prepend icon-envelope-alt"></i>
                <input name="email" placeholder={t('email')} type="email" required />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>

              </label>
            </section>
            <section className="col col-6">
              <label className="input" >
                <i className="icon-prepend icon-envelope-alt"></i>
                <input name="email_confirmation" placeholder={t('email_confirmation')} type="email" required />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>

              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="First_Name" placeholder={t('first_name')} type="text" required />
              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="Last_Name" placeholder={t('last_name')} type="text" required />
              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="Nickname" placeholder={t('nick_name')} type="text" required />
              </label>
            </section>

            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-mobile-phone"></i>
                <input name="Mobile" placeholder={t('mobile')} type="tel" required id="Mobile" />
              </label>
            </section>

          </div>

          <div className="row">
            <section className="col col-6">
                <label className="input">
                    <i className="icon-prepend fa-birthday-cake"></i>
                      <input
                        name="Birth_Year"
                        placeholder={t('Birth_year')}
                        value={props.value}
                        onChange={props.handleChange}
                        type="number"
                        min={Min_Year}
                        max={Max_Year}
                        required
                        />
                </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="Gender" id="Gender">
                  <option value={t('gender.0')} >{t('gender.0')}</option>
                  <option value={t('gender.1')} >{t('gender.1')}</option>
                  <option value={t('gender.2')} >{t('gender.2')}</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-12">
              <label className="select">
                <select name="Marital_Status" id="Marital_Status">
                  <option value={t('marital_status.0')} >{t('marital_status.0')}</option>
                  <option value={t('marital_status.1')} >{t('marital_status.1')}</option>
                  <option value={t('marital_status.2')} >{t('marital_status.2')}</option>
                </select>

                <i></i>
              </label>
            </section>

          </div>

          <div className="row">

            <section className="col col-12">
              <label className="input">

                <AutocompleteContainer List={Province_List} placeholder_value={t('province')} name="Province"/>

              </label>
            </section>
          </div>


        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-12">
              <label className="select">
                <select name="Affiliation" id="Affiliation">
                  <option value={t('affiliation.0')} >{t('affiliation.0')}</option>
                  <option value={t('affiliation.1')} >{t('affiliation.1')}</option>
                  <option value={t('affiliation.2')} >{t('affiliation.2')}</option>
                  <option value={t('affiliation.3')} >{t('affiliation.3')}</option>
                  <option value={t('affiliation.4')} >{t('affiliation.4')}</option>
                  <option value={t('affiliation.5')} >{t('affiliation.5')}</option>
                  <option value={t('affiliation.6')} >{t('affiliation.6')}</option>
                  <option value={t('affiliation.7')} >{t('affiliation.7')}</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-12">
              <label className="input">
                <input name="Company" placeholder={t('company')} type="text" required />
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-12">
              <label className="input">
                <input name="Position" placeholder={t('position')} type="text" required />
              </label>
            </section>
          </div>

        </fieldset>

        <fieldset>

          <div className="row">
            <section className="col col-12">
              <label className="label" >{t('what_learn_about')}</label>
                <label className="textarea">
  							<textarea rows="3" name="Learn_About" required></textarea>
  						</label>
            </section>
          </div>

          <section>
            <label className="label">{t('where_about_ynu.0')}</label>
            <div className="row">
  							<div className="col col-4">
  								<label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.1')} /><i></i>{t('where_about_ynu.1')}</label>
  								<label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.4')} /><i></i>{t('where_about_ynu.4')}</label>
  							</div>
  							<div className="col col-4">
  								<label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.2')} /><i></i>{t('where_about_ynu.2')}</label>
  								<label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.5')} /><i></i>{t('where_about_ynu.5')}</label>
  							</div>
  							<div className="col col-4">
  								<label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.3')} /><i></i>{t('where_about_ynu.3')}</label>
  								<label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.6')} /><i></i>{t('where_about_ynu.6')}</label>
  							</div>
  					</div>
            <div className="row">
              <div className="col col-12">
                <label className="checkbox"><input className="Checkbox_YNU" type="checkbox" name="YourNextU[]" value={t('where_about_ynu.7')} /><i></i>{t('where_about_ynu.7')}</label>
              </div>
            </div>
            <div className="row">
                <div className="col col-12">
                  <label className="input">
                    <input name="YourNextU_other" type="text"  />
                  </label>
                </div>
            </div>
          </section>



        </fieldset>

        <footer>
          <button type="submit" className="button">{t('submit')}</button>
        </footer>
      </form>
    </div>
  );
}


// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);


const SurveyPage = ({
  data, handleChange, value, handleSubmit
}) => {

  return (
    <Suspense fallback={<Loader />}>
      <Page data={data, value} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </Suspense>
  );
}

export default SurveyPage
