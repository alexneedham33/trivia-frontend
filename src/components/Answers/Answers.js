import React, { useContext, useState } from 'react';
import { mainContext } from '../MainProvider/MainProvider';
import { useHistory, Link } from "react-router-dom";
import './Answers.css';
import '../Main/Main.css';


function Answers(props) {

 const context = useContext(mainContext);
 const [correctAnswerCount, setCorrectAnswerCount] = context[0];
 const [selectedAnswer, setSelectedAnswer] = useState('')
 const history = useHistory();
 console.log(props.correctAnswer);

 // random assignment of answer index prop to position for render
 const answerA = props.answers[props.randAnswerArr[0]];
 const answerB = props.answers[props.randAnswerArr[1]];
 const answerC = props.answers[props.randAnswerArr[2]];
 const answerD = props.answers[props.randAnswerArr[3]];

function submitHandler(e){
  console.log(props.correctAnswer);
  console.log(selectedAnswer);

  document.getElementById("AnswerCheck").classList.add("AnswerCheckSlide");
  document.getElementById("respContainer").classList.add("responseButtonsBlur");
  document.getElementById("respContainer").classList.add("noPointer");

      if (props.correctAnswer === selectedAnswer){
        document.getElementById("AnswerCheck").insertAdjacentHTML('afterbegin',`<p>Good job! That is <strong>Correct</strong>.<br/><br/>Click next to move one step forward!</p>`);
        setCorrectAnswerCount(correctAnswerCount => correctAnswerCount + 1);
      } else {
        document.getElementById("AnswerCheck").insertAdjacentHTML('afterbegin',`<p>Ooops! That is <strong>Incorrect</strong>.<br/><br/> The correct answer is:  <strong>${props.correctAnswer}</strong><p>`);
        console.log('error in submit handler');
      }
      return;
}


function handleAnswerChange(e){
    console.log(e.target.value);
    setSelectedAnswer(e.target.value);
}


  return (
      // <form id="answerForm" onSubmit={submitHandler}>
        
            //{/* <label><span className="answerLetter">A: </span>{answerA}</label> */}
          <div id="answerContainer">
            <div id="responseButtons">
            <button className="responseButton"  value={answerA} name= "answer" onClick={handleAnswerChange}>
               A: {answerA}
            </button>
            <button className="responseButton"  value={answerB} name= "answer" onClick={handleAnswerChange}>
             B: {answerB}
            </button>
            <button className="responseButton" value={answerC} name= "answer" onClick={handleAnswerChange}>
              C: {answerC}
            </button>
            <button className="responseButton" value={answerD} name= "answer" onClick={handleAnswerChange}>
              D: {answerD}
            </button>
            </div>
             <button id="submitButton" name= "answer" onClick={submitHandler} >SUBMIT</button>
             {/* <div id="AnswerCheck">
               {props.correctAnswer===selectedAnswer ? 'That is correct' : 'That is false'}
               <Link to="/Board">
               <button id="InstructionBtn">Click Next</button>
               </Link>
             </div> */}
          </div>

  )
}

export default Answers
