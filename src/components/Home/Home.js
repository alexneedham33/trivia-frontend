import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
// import bubbleText from './trivia-speechbubble.png';
// import triviaHomeImage from './TriviaHomepage.png';
import HomeImg from './HomeImg.png';
import { useHistory } from "react-router-dom";

// import Nav from '../Nav/Nav';


const Home = () => {

  const history = useHistory();

  function handleClick(){
    history.push('/Board')
  }
  return ( 
    <div id="homeDiv">
      {/* <Nav /> */}
      {/* <img id="triviaMainImage" src={triviaHomeImage} alt="home page"/> */}
      {/* <h1 id="title">Puebleando Ando</h1>
      <div id="bubbleContainer">
        <img id="bubbleImg" src={bubbleText} alt="bubble" />
      </div> */}
       
      <img id="HomeImage" src={HomeImg} alt="blocks"  />
        {/* <Link id="playLink" to="/Settings"> */}
          <button id="startButton" onClick={handleClick}>Play Now!</button>
        {/* </Link> */}
    </div>
   );
}
 
export default Home;