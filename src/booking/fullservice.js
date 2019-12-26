import React, { Component } from 'react';

const FullService = ({
  handleChange,stateVal
}) => (

  <div>

      <div className="row p-5">
        <div className="col-md-4 text-right margin-t-auto">จำนวนจุดลงทะเบียน</div>
        <div className="col-md-6">
          <input required type="text" className="form-control" id="register_number" name="register_number" placeholder="x" value={stateVal.register_number  || ''} onChange={handleChange}/>
        </div>
      </div>

      <div className="row p-5">
        <div className="col-md-4 text-right margin-t-auto">จำนวนหน้าจอแสดงผล</div>
        <div className="col-md-6">
          <input required type="text" className="form-control" id="moniter_number" name="moniter_number" placeholder="x" value={stateVal.moniter_number  || ''} onChange={handleChange}/>
        </div>
      </div>

    </div>

)

export default FullService;
