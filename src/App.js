import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOut from './components/Demo/DemoOut';

function App() {

  console.log("run")
  
  const [showP, setShowP] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  const toggleHandler =useCallback(()=> {
    if (allowToggle){
      setShowP(prevShowP =>  !prevShowP)
    }
  },[allowToggle])

  const allowToggleHandler = () =>{
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOut show={showP}/>
      <Button onClick= {toggleHandler}>Toggle Paragraph!</Button>
      <Button onClick= {allowToggleHandler}>Allow Toggling</Button>
    </div>
  );
}

export default App;
