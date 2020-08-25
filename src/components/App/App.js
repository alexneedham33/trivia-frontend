import React, { useEffect, useState } from "react";
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
  const [degNumIndex, setDegNumIndex] = useState(0);
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
      <Route
        exact
        path="/Wheel"
        render={(props) => {
          return (
            <Wheel
              {...props}
              degNumIndex={degNumIndex}
              setDegNumIndex={setDegNumIndex}
            />
          );
        }}
      />
      <Route
        path="/Question"
        render={(props) => {
          return (
            <Main
              {...props}
              degNumIndex={degNumIndex}
            />
          );
        }}
      />
      <Route path="/Endpage" component={Winner} />
    </MainProvider>
  );
}

export default App;
