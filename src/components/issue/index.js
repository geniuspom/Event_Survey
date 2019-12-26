import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
//import Site_Logo from'../../../assets/static/images/ojlogo.png';
//import ClientPage from './client'

const IssuePage = ({
  handleSubmit, onInputChange, category, severity_level
}) => (
    <div className='body'>
      <form className='sky-form' onSubmit={handleSubmit} id='IssueForm'>
        <header>YNU Issue Ticket</header>

        <fieldset>
					<section>
						<label className="label">Subject</label>
						<label className="input">
							<input name='subject' type="text" required />
						</label>
					</section>

          <section>
            <label className="label">Email address</label>
						<label className="input">
							<i className="icon-append icon-envelope-alt"></i>
							<input name='email' type="text" placeholder="" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
							<b className="tooltip tooltip-bottom-right">Needed to verify your account</b>
						</label>
					</section>

          <section>
						<label className="label">Category</label>
						<div className='row'>
              <div className='col col-12'>
								<label className="radio"><input type="radio" name="category" value="Admin Function" defaultChecked={category === 'Admin Function'} /><i></i>Admin Function</label>
								<label className="radio"><input type="radio" name="category" value="Content Error" defaultChecked={category === 'Content Error'}/><i></i>Content Error</label>
								<label className="radio"><input type="radio" name="category" value="Disappear" defaultChecked={category === 'Disappear'}/><i></i>Disappear</label>
                <label className="radio"><input type="radio" name="category" value="Display & Interface" defaultChecked={category === 'Display & Interface'}/><i></i>Display & Interface</label>
                <label className="radio"><input type="radio" name="category" value="User Error" defaultChecked={category === 'User Error'}/><i></i>User Error</label>
                <label className="radio"><input type="radio" name="category" value="System Function Error" defaultChecked={category === 'System Function Error'}/><i></i>System Function Error</label>
              </div>
						</div>
					</section>

          <section>
            <label className="label">Severity Levels</label>
            <div className='row'>
              <div className='col col-12'>
                <label className="radio"><input type="radio" name="severity_levels" value="Feature Request" defaultChecked={severity_level === 'Feature Request'} /><i></i>Feature Request (Wouln’t it be nice if we could...)</label>
                <label className="radio"><input type="radio" name="severity_levels" value="Minor" defaultChecked={severity_level === 'Minor'}/><i></i>Minor</label>
                <label className="radio"><input type="radio" name="severity_levels" value="Major" defaultChecked={severity_level === 'Major'}/><i></i>Major</label>
                <label className="radio"><input type="radio" name="severity_levels" value="Blocker" defaultChecked={severity_level === 'Blocker'}/><i></i>Blocker</label>
              </div>
            </div>
          </section>

          <section>
            <label className="label">Message</label>
            <label className="textarea textarea-resizable">
              <textarea name='message' rows="3" required></textarea>
            </label>
          </section>

					<section>
						<label className="label">File input</label>
						<label htmlFor="file" className="input input-file">
							<div className="button"><input type="file" id="file" name='file' onChange={onInputChange} />Browse</div><input id='file_name' type="text" readOnly />
						</label>
					</section>

				</fieldset>

        <footer>
        	<button type="submit" className="button">Submit</button>
        </footer>

      </form>
    </div>
)

export default IssuePage;
