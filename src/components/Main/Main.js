import React, {useState, useEffect, useContext} from 'react';
import Question from '../Question/Question';
import Answers from '../Answers/Answers';
import './Main.css';
import { mainContext } from '../MainProvider/MainProvider';
import { getData } from '../../utilities/utilities';
import { Link } from 'react-router-dom';
import '../Answers/Answers.css'

function Main({degNumIndex}) {

//Setting local state
const [question, setQuestion] = useState('');
const [answers, setAnswers] = useState([]);
const [correctanswer, setCorrectAnswer] = useState('');

//logic for creating random answer index array to be passed to answers
let array = ['0', '1', '2', '3'];
 let shuffle = [...array];
 const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
 shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
 console.log(shuffle);

useEffect((question, answers, correctanswer)=>{
  console.log("degNum main", degNumIndex)
      getData(degNumIndex).then(
        res=> {
          setQuestion(res.data.title);
          setAnswers([res.data.correctanswer, res.data.answer2, res.data.answer3, res.data.answer4]);
          setCorrectAnswer(res.data.correctanswer);
          console.log('Axios request sent', res);
        }
      ) 
},[]);



  return (
    <div id="mainCont">
      <div id="respContainer">
        <Question question = {question} />
        <Answers answers= {answers} correctAnswer = {correctanswer} randAnswerArr= {shuffle} />
      </div>
      <div id="AnswerCheck">
      <br />
      <Link to="/Board">
        <button id="InstructionBtn">Click Next</button>
      </Link>
    </div>
  </div>
  )
};


export default Main
