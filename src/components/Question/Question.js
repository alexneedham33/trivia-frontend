import React from 'react'
import './Question.css'

function Question(props) {

console.log('rendering question1');

  return (
      <div id='questionContainer'>
          <div id='question'>{props.question}</div> 
      </div>
  )
}

export default Question
