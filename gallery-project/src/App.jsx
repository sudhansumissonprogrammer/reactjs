import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data,setdata]=useState([]);

  const handelbtn =async ()=>{
    const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    setdata(response.data);
    console.log(response.data);


  }

  return (
    
      <div className='bg-black overflow-auto min-h-screen text-white'>
        <button className='p-  bg-green-600 px-5 py-3 text-white rounded ' onClick={handelbtn}>
            Get Data
        </button>

        

        
      
   
    <div className='flex flex-wrap gap-3 rounded'>
    

        {data.map(item=>{
      return(
        <div>
           <img src={item.download_url} alt="img"
           className='h-4- w-40' /> 

           <h3 className='text'>{item.author}</h3>
           </div>
           
           
           
      )

     })}
     

      
     

      
      
    </div>



    </div>
    
    
    
  )
}

export default App
