import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data,setdata] =useState([]);

   const getdata=async ()=>{

    const response=await axios.get('https://picsum.photos/v2/list')
    setdata(response.data);
   
  }
  return (
    <div>
      <button onClick={getdata}>
        get now
      </button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author} {idx}</h3>;
        })}

      </div>
      
    </div>
  )
}

export default App
