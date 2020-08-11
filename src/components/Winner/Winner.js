import React, {useContext} from 'react';
import { mainContext } from '../MainProvider/MainProvider';
import { useHistory } from "react-router-dom";

function Winner() {

  const context = useContext(mainContext);
  const history = useHistory();
  const [correctAnswerCount, setCorrectAnswerCount] = context;
  
  function reset(){
    setCorrectAnswerCount(0);
    history.push('/Board');
  }


  return (
    <div>
      <h1>CONGRATULATIONS, YOU WIN!</h1>
      <button onClick={reset}>Play Again?</button>
    </div>
  )
}

export default Winner
