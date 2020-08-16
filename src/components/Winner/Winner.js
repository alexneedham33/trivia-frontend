import React, {useContext} from 'react';
import { mainContext } from '../MainProvider/MainProvider';
import { useHistory } from "react-router-dom";
import './Winner.css';

function Winner() {

  const context = useContext(mainContext);
  const history = useHistory();
  const [correctAnswerCount, setCorrectAnswerCount] = context[0];
  console.log('Hello winner');


  function reset(){
    setCorrectAnswerCount(0);
    history.push('/Board');
  }


  return (
    <div>
      <div id="congratsTxt">
        <h1>CONGRATULATIONS, YOU WIN!</h1>
      </div>
      <button id="winnerBtn" onClick={reset}>Play Again?</button>
    </div>
  )
}

export default Winner
