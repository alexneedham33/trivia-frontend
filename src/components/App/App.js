import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import MainProvider from "../MainProvider/MainProvider.js";
import Main from "../Main/Main";
import Board from "../Board/Board.js";
import Wheel from "../Wheel/Wheel.js";
import Winner from "../Winner/Winner.js";
import Nav from "../Nav/Nav.js";
import Contact from "../Contact/Contact.js";


function App() {
  // useEffect(() => {
  //   if (window.performance) {
  //     if (performance.navigation.type === 1) {
  //       localStorage.clear();
  //     }
  //   }
  // })

  // const [play] = useSound(Huapango);

  // useEffect(()=>{
  //   play();
  // })

  return (
    <MainProvider>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Board" component={Board} />
      <Route exact path="/Wheel" component={Wheel} />
      <Route path="/Question" component={Main} />
      <Route path="/Endpage" component={Winner} />
    </MainProvider>
  );
}

export default App;
