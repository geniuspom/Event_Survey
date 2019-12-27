import React, { Component, Suspense } from 'react';

const Radios = ({
  data, handleChange, value, handleSubmit
}) => {

  return (

    <div className="box">
      <p>How satisfied are you with our channel?</p>
      <div className="rating">
        <input type="radio" name="rating_1" id="rate6" value="6"/><label for="rate6">6</label>
        <input type="radio" name="rating_1" id="rate5" value="5"/><label for="rate5">5</label>
        <input type="radio" name="rating_1" id="rate4" value="4"/><label for="rate4">4</label>
        <input type="radio" name="rating_1" id="rate3" value="3"/><label for="rate3">3</label>
        <input type="radio" name="rating_1" id="rate2" value="2"/><label for="rate2">2</label>
        <input type="radio" name="rating_1" id="rate1" value="1"/><label for="rate1">1</label>
      </div>
    </div>

  );
}

export default Radios
