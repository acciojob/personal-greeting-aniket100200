import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    
    const [input,setIntput]= useState("");

return (
    <div>
       <input type="text" onChange={(e)=>{setIntput(e.target.value)}}/>
       <p>{input && `Hello ${input}!`}</p>
    </div>
  )
}

export default App
