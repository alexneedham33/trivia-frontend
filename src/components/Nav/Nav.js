import React, {useContext} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { mainContext } from '../MainProvider/MainProvider';
import './Nav.css';
import triviaLogo from './Trivialogo.png';


function Nav() {

  const context = useContext(mainContext);
  const history = useHistory();
  const [correctAnswerCount, setCorrectAnswerCount] = context;
  
  // function reset(){
  //   setCorrectAnswerCount(0);
  // }

  return (
    <div id="navDiv">
      <Link to='/'>
      <img src={triviaLogo} alt='logo'/>
      </Link>
    </div>
  )
}

export default Nav
