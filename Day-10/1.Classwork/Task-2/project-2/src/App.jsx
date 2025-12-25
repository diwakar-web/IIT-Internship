import { useState, useEffect } from "react";

import "./App.css"
import { use } from "react";

function App() {
    const [count,setCount]=useState(0);
    const[input,setInput]=useState("");

    // useEffect(
    //   ()=>{
    //     console.log("Component Rendered") //NEVER CALL THIS
    //   },[]
    // );


    useEffect(
      ()=>{
        fetch("")
        .then(res=>res.json())
        .then(data=>setUsers(data));
      },[]
    );

    //CONDITIONAL RENDERING

  return (
    <>
    {count}=COUNT
    <br />
    <button className="btn" 
    onClick={
      ()=>{
        setCount(count+1)

      }
    }>Click Me</button>
<br />
    <input type="text" value={input} onChange={(e)=>{
      setInput(e.target.value)
    
    }} />
    
    </>
  )
}

export default App
