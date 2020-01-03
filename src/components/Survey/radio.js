import React, { Component, Suspense } from 'react';

const Radios = ({
  data, handleChange, value, handleSubmit, onselect, lang, index, firstquestion
}) => {

  let choices = [];

  for (let i = 1; i <= data.score; i++)
  {
    choices.unshift(
      {
        "name" : data.name,
        "id" : data.id + "_" + i,
        "value" : i,
        "classname" : "no-" + i}
    );

  }

  let question_show;

  if(lang == "TH"){
    question_show = data.question_TH;
  }else{
    question_show = data.question_EN;
  }


  return (

    <div className="box">
      <p>{firstquestion + ") " + question_show + " [" + data.id + "]"}</p>
      <div className="rating">
        {
          choices.map((choice) => (
            <div key={choice.id} className={choice.classname}>
              <input type="radio" name={choice.name} id={choice.id} value={choice.value} onClick={onselect}/>
              <label htmlFor={choice.id}>{choice.value}</label>
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default Radios
