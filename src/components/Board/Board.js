import React, {useContext, useEffect, useState} from 'react'
import './Board.css'
import { mainContext } from '../MainProvider/MainProvider';
import { useHistory } from "react-router-dom";
import Bubble from './bubble.png';
import SmallBoard from './Smallboard';
import MediumBoard from './Mediumboard';



function Board() {

  const history = useHistory();
  const context = useContext(mainContext);
  const [correctAnswerCount, setCorrectAnswerCount] = context[0];
  const [numberOfRenders, setNumberOfRenders] = useState(0);

  const [isDesktop, setDesktop] = useState(window.innerWidth<850);

  const updateMedia = () => {
    if (window.innerWidth<850){
      setDesktop(true)
    } else {
      setDesktop(false)
    }
  };


 useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  },[]);


  useEffect(()=>{
    const noElems = document.getElementsByClassName('lion').length
    const position = correctAnswerCount
    if(correctAnswerCount<noElems){
    const stepCounter = document.getElementById(`lion${position}`);
    stepCounter.setAttribute('display', "block" );
    } else{
      history.push('/Endpage')
    }
  },[correctAnswerCount, history, isDesktop])

  
  return (
    <div id="svgContainer">
       {isDesktop ? <SmallBoard numRenders={numberOfRenders} setNumRenders={setNumberOfRenders}/> : <MediumBoard numRenders={numberOfRenders} setNumRenders={setNumberOfRenders}/>}
    </div>
  );
};

export default Board;
