import React, { useState, useEffect } from 'react'
import './Home.css';
import HomeImgWide from './HomeImgWide.png';
import HomeImgSmall from './HomeImgSmall.png';
import { useHistory } from "react-router-dom";



const Home = () => {

  const history = useHistory();
  const [isDesktop, setDesktop] = useState(window.innerWidth<850);
  const tester = 'hello';

  function handleClick(){
    history.push('/Board')
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

  
  
  return ( 
    <div id="homeDiv">
     {isDesktop ? <img id="HomeImageSmall" src={HomeImgSmall} alt="blocks"  /> : <img id="HomeImageWide" src={HomeImgWide} alt="blocks"  /> }
      <button id="startButton" onClick={handleClick}> Play Now! </button>
    </div>
   );
}
 
export default Home;