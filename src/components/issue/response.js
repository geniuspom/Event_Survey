import React, { Component } from 'react';

const ResponsePage = ({
  handleSubmit, ResponseData, ResponseAttached
}) => (
    <div className='pading_top'>
      <form className='sky-form'>

        <fieldset>

          <section>
            <label className="label-title">Reply Message</label>
            <label className="text_value">
              { ResponseData.message }
            </label>
          </section>

          <section>
            <label className="label-title">Attachment</label>
            <label className="text_value">
              { ResponseAttached }
            </label>
          </section>

				</fieldset>

        <footer>
          <section className="align_right margin_bottom_0">
            <label className="text_value_minimal">
              Created : { ResponseData.created_at }
            </label>
            <label className="text_value_minimal">
              Updated : { ResponseData.updated_at }
            </label>
            <label className="text_value_minimal margin_bottom_0">
              Created By : { ResponseData.email }
            </label>
          </section>
        </footer>

      </form>
    </div>
)

export default ResponsePage;
