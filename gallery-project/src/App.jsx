import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data,setdata]=useState([]);
  const [index,setindex]=useState(1);

  const handelbtn =async ()=>{
    const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setdata(response.data);
    console.log(response.data);


  }
  useEffect(function(){
    handelbtn()
  },[index])

 

  return (
    
      <div className='bg-black overflow-auto min-h-screen text-white'>
        <button className='p-  bg-green-600 px-5 py-3 text-white rounded cursor-pointer active:scale-95 ' onClick={handelbtn}>
            Get Data
        </button>

        

        
      
   
    <div className='flex flex-wrap gap-6 overflow-hidden'>
    

        {data.map(item=>{
      return(
        <div className='h-40 w-40 rounded-xl'>
          <a href={item.url}>

          
           <img  src={item.download_url} alt="img"
           className='h-full w-full object-cover' /> 
           <h3 className='font-bold'>{item.author}</h3>
           </a>
           </div>


           
           
           
      )

     })}
     

      
     

      
      
    </div>

    <div className='flex justify-center items-center p-3 gap-4 rounded-xl'>
      <button className='bg-amber-300 text-black font-semibold px-2 py-1 rounded-xl text-sm cursor-pointer active:scale-95' onClick={()=>
        {
          setindex(index-1)
        }
      }>Prev</button>
      <button className='bg-amber-300 text-black font-semibold px-2 py-1 rounded-xl text-sm cursor-pointer active:scale-95' onClick={()=>
        {
          setindex(index+1)
        }
      }>Next</button> 
    </div>



    </div>
    
    
    
  )
}

export default App
