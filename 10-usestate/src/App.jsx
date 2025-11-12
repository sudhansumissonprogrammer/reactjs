import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [num,setnum] = useState(0);

  useEffect(function(){
    console.log("use effect is running")
  })
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1);
      }}>
        Click
      </button>

    </div>
  )
}

export default App
