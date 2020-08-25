import React, { createContext, useState } from "react";

export const mainContext = createContext();

function MainProvider(props) {
  
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [attempts, setAttempts] = useState(0);


  //console.log("does this keep rendering?");
  // console.log(correctAnswerCount)
  //console.log(attempts);

  const stateOptions = [
    [correctAnswerCount, setCorrectAnswerCount],
    [attempts, setAttempts]
  ]

  return (
    <mainContext.Provider value={stateOptions}>
      {props.children}
    </mainContext.Provider>
  );
}

export default MainProvider;

//
