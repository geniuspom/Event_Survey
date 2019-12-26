import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Site_Logo from'../../assets/register_template/image/SEAC logo.png';

import Year_values from '../../json/List.js';

import {Province} from '../../json/province.js';

import Autocomplete from 'react-autocomplete'

import AutocompleteContainer from '../../containers/Survey/AutocompleteContainer'

function Page(data, handleChange, value) {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const textStyle = {
    padding:'0 0 10px 0',
    color: '#fff',
    cursor: 'pointer',
  };

  let Full_Date = new Date();
  let Min_Year = Full_Date.getFullYear() - 80;
  let Max_Year = Full_Date.getFullYear() - 10;

  //let Province_List = Province(i18n.language)

  return (
    <div>
        <div className="text-center" style={textStyle}>
          <a className="" onClick={() => changeLanguage('th')}>ภาษาไทย</a>
          &nbsp;|&nbsp;
          <a className="" onClick={() => changeLanguage('en')}>English</a>
        </div>
      <form className="sky-form" role="form" method="POST" >
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
                <input name="first_name" placeholder={t('first_name')} type="text" required />
              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="last_name" placeholder={t('last_name')} type="text" required />
              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="nick_name" placeholder={t('nick_name')} type="text" required />
              </label>
            </section>

            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-mobile-phone"></i>
                <input name="mobile" placeholder={t('mobile')} type="tel" required />

              </label>
            </section>

          </div>

          <div className="row">
            <section className="col col-6">
                <label className="input">
                    <i className="icon-prepend fa-birthday-cake"></i>
                      <input
                        name="mobile"
                        placeholder={t('Birth_year')}
                        value={value}
                        onChange={handleChange}
                        type="number"
                        min={Min_Year}
                        max={Max_Year}
                        required
                        />
                </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="gender">
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
                <select name="marital_status">
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
                <i className="icon-prepend fa-home"></i>
                <input name="province" placeholder={t('province')} type="tel" required />
              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-12">
              <label className="input">

                <AutocompleteContainer lang={i18n.language} placeholder_value={t('province')}/>

              </label>
            </section>
          </div>


        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-12">
              <label className="select">
                <select name="affiliation">
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
                <input name="company" placeholder={t('company')} type="text" required />
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-12">
              <label className="input">
                <input name="position" placeholder={t('position')} type="text" required />
              </label>
            </section>
          </div>

        </fieldset>

        <fieldset>

          <div className="row">
            <section className="col col-12">
              <label className="label" >{t('what_learn_about')}</label>
                <label className="textarea">
  							<textarea rows="3" name="what_learn_about" required></textarea>
  						</label>
            </section>
          </div>

          <section>
            <label class="label">{t('where_about_ynu.0')}</label>
            <div className="row">
  							<div className="col col-4">
  								<label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.1')}</label>
  								<label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.4')}</label>
                  <label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.7')}</label>
  							</div>
  							<div className="col col-4">
  								<label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.2')}</label>
  								<label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.5')}</label>
  							</div>
  							<div className="col col-4">
  								<label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.3')}</label>
  								<label className="checkbox"><input type="checkbox" name="where_about_ynu" /><i></i>{t('where_about_ynu.6')}</label>
  							</div>
  					</div>
            <div className="row">
                <div className="col col-12">
                  <label className="input">
                    <input name="where_about_ynu_other" type="text"  />
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

/*
<select name="Birth_year">
  <option value="0" >{t('Birth_year')}</option>
  {
    Year_values.map((Year_value) => (
      <option key={Year_value.id} value={Year_value.id}>{Year_value.value}</option>
    ))
  }
</select>
*/


/*function Birth_year (){

  const { t, i18n } = useTranslation();
  //var data_value = <option value="0" >{t('Birth_year')}</option>
  let data_values = []

  for(let i = 1940; i <= 2490; i++){
    data_values => i
  }

  const tifOptions = Object.keys(data_values).map(data_value =>
    <option value={data_value}>{tifs[data_value]}</option>
  )

  return (
    //<option value="0" >{t('Birth_year')}</option>
    tifOptions
  )

}*/


// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);


const SurveyPage = ({
  data, handleChange, value
}) => {

  return (
    <Suspense fallback={<Loader />}>
      <Page data={data, handleChange, value} fun="fun" />
    </Suspense>
  );
}

export default SurveyPage
