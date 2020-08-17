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
  const [attempts, setAttempts] = context[1]

  // const [numberOfRenders, setNumberOfRenders] = useState(0);
  const [isDesktop, setDesktop] = useState(window.innerWidth<850);

  function boardClick() {
    setAttempts((attempts)=>attempts+1);
    // props.setNumRenders(() => (numberOfRenders++));
    // console.log("medium>>>2", numberOfRenders);
    // localStorage.setItem("numOfRenders", numberOfRenders);
    history.push("/Wheel");
  }

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
      <div id="innerSvgCont">
        <button id="boardButton" onClick={boardClick}>CLICK HERE!</button>
        {attempts===0 && <img id="bubble" src={Bubble} alt="motivational text" /> }
        {isDesktop ? <SmallBoard /> : <MediumBoard />}
      </div> 
       {/* <div id="testDiv"></div> */}
    </div>
  );
};

export default Board;
