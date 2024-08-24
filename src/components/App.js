import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    
    const [input,setIntput]= useState("");

return (
    <div>
       <p>Enter your name:</p>
        <input type="text" onChange={(e)=>{setIntput(e.target.value)}}/>
       {input && <p>Hello {input}!</p>}
    </div>
  )
}

export default App
