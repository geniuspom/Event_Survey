import React, { Component } from 'react';

const ViewMenu = ({
  replySubmit, onReplyChange, ticket,
}) => (
    <div className='pading_top'>
      <form className='sky-form' onSubmit={replySubmit} id='ReplyForm'>
        <header>Reply Issue</header>

        <fieldset>

          <section>
            <label className="label">Email address</label>
            <input name='ticket' type="hidden" required defaultValue={ticket}/>
            <label className="input">
              <i className="icon-append icon-envelope-alt"></i>
              <input name='email' type="text" placeholder="" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
              <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>
            </label>
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
              <div className="button"><input type="file" id="file" name='file' onChange={onReplyChange} />Browse</div><input id='file_name' type="text" readOnly />
            </label>
          </section>

        </fieldset>
        <footer>
          <button type="submit" className="button">Reply</button>
        </footer>
      </form>
    </div>
)

export default ViewMenu;
