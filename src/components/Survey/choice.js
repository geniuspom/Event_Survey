import React, { Component, Suspense } from 'react';

const Radios = ({
  data, handleChange, value, handleSubmit
}) => {

  let choices = [];

  for (let i = 1; i <= data.score; i++)
  {
    choices.unshift(
      {"name" : data.name,
      "id" : data.id + "_" + i,
      "value" : i}
    );

  }

  console.log(choices);


  return (

    <div className="box">
      <p>{data.question}</p>
      <div className="rating">
        {
          choices.map((choice) => (
            <div>
              <input type="radio" name={choice.name} id={choice.id} value={choice.value} />
              <label for={choice.id}>{choice.value}</label>
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default Radios
