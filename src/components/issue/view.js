import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
//import Site_Logo from'../../../assets/static/images/ojlogo.png';
//import ClientPage from './client'

const IssuePage = ({
  onClickEdit, onClickReply, IssueData, IssueAttached
}) => (
      <form className='sky-form'>
        <header>Issue Details : { IssueData.issue_topic.ticket }</header>

        <fieldset>
					<section>
						<label className="label-title">Subject</label>
						<label className="text_value">
							{ IssueData.issue_topic.subject }
						</label>
					</section>

          <section>
            <label className="label-title">Message</label>
            <label className="text_value">
              { IssueData.issue_topic.message }
            </label>
          </section>

          <section>
            <label className="label-title">Category</label>
            <label className="text_value">
              { IssueData.issue_topic.category }
            </label>
          </section>

          <section>
						<label className="label-title">Severity Levels</label>
						<label className="text_value">
							{ IssueData.issue_topic.severity_levels }
						</label>
					</section>

          <section>
            <label className="label-title">Attachment</label>
            <label className="text_value">
              { IssueAttached }
            </label>
          </section>

				</fieldset>

        <footer>
          <section className="align_right margin_bottom_0">
            <label className="text_value_minimal">
              Created : { IssueData.issue_topic.created_at }
            </label>
            <label className="text_value_minimal">
              Updated : { IssueData.issue_topic.updated_at }
            </label>
            <label className="text_value_minimal margin_bottom_0">
              Created By : { IssueData.issue_topic.email }
            </label>
          </section>
          <button type="button" onClick={ onClickReply } className="button">Reply</button>
          <button type="button" onClick={ onClickEdit } className="button">Edit</button>
        </footer>

      </form>
)

export default IssuePage;
