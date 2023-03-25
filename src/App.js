import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOut from './components/Demo/DemoOut';

function App() {

  console.log("run")
  
  const [showP, setShowP] = useState(false)
  const toggleHandler =useCallback(()=> {
    setShowP(prevShowP => !prevShowP)
  },[])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOut show={false}/>
      <Button onClick= {toggleHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
