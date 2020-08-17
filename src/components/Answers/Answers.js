import React, { useContext, useState } from 'react';
import { mainContext } from '../MainProvider/MainProvider';
import './Answers.css';
import '../Main/Main.css';


function Answers(props) {

 const context = useContext(mainContext);
 const [correctAnswerCount, setCorrectAnswerCount] = context[0];
 const [selectedAnswer, setSelectedAnswer] = useState('')
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
    e.target.focus();
    setSelectedAnswer(e.target.value);

}



    return (
          <div id="answerContainer">
            {console.log(correctAnswerCount)}
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
            <button id="submitButton" name= "answer" onClick={submitHandler} >SUBMIT</button>
            </div>
             {/* <button id="submitButton" name= "answer" onClick={submitHandler} >SUBMIT</button> */}
          </div>

  )
}

export default Answers
