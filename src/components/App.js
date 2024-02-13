import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    
    const [input,setIntput]= useState("");

  const onChangeText=(event)=>{
    
    setIntput(event.target.value);
  }
  return (
    <div>
       <p>Enter your name:</p>
        <input onChange={onChangeText}/>
       <p>{`Hello ${input}!`}</p>
    </div>
  )
}

export default App
