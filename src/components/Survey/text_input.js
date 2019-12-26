import React, { Component } from 'react';

const Text_Input_Page = ({
  Name, Placeholder, IconName, ValueType, DefaultValue
}) => (
    <label className="input">
        <i className={'icon-prepend ' + IconName}></i>
          <input name={Name} placeholder={Placeholder} type={ValueType}  defaultValue={DefaultValue} />
    </label>
)

export default Text_Input_Page;
