import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
import triviaLogo from './Trivialogo.png';
import audioOn from './audioOn.png';
import audioOff from './audioOff.png';
import useSound from 'use-sound';
import Huapango from './Huapango.mp3';


function Nav() {

  const [toggleAudio, setToggleAudio] = useState(true);
  const [play, exposedData] = useSound(Huapango, {volume: 0.9});

  
  function handleAudio(){
    setToggleAudio(!toggleAudio)
    toggleAudio ? play() : exposedData.stop()
  }

  return (
    <div id="navDiv">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Contact'>About / Contact</Link></li>
          <li id="audioli">
                {!toggleAudio ? <img onclick={handleAudio} id="audioOn" src={audioOn} alt="toggle audio on" onClick={handleAudio}
                   /> : <img onClick={handleAudio} id="audioOff" src={audioOff} alt="toggle audio off" onClick={handleAudio}/>}
          </li>
        </ul>
      </nav>
      {/* <Link to='/'>
      <img src={triviaLogo} alt='logo'/>
      </Link> */}
    </div>
  )
}

export default Nav
