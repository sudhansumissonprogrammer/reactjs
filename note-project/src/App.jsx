import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
    const [title, settitle] = useState('');
  const [detail, setdetail] = useState('');
  const [tasks, settasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtasks=[...tasks];
    newtasks.push({title,detail});
    settasks(newtasks);
   
    settitle('');
    setdetail('');
  }
  const handleDelete = (idx) => {
    const copytasks=[...tasks];
    copytasks.splice(idx,1);
    settasks(copytasks);
    

  }

  return (
    <div className='  h-screen bg-black text-white flex'>
      <form className=' w-1/2 flex items-start p-10' onSubmit={(e)=>handleSubmit(e)}>
        <div className='w-1flex items-start flex-col'>
          <h1 className=' text-2xl font-bold mb-5' >ADD NOTES</h1>
             <input type="text" placeholder='Enter Your Heading' className='w-full  p-4 border-2  rounded-2xl'  value={title} onChange={(e)=>{
              settitle(e.target.value);

             }}/>

          <textarea type="text" placeholder='Write Details' className=' h-32 w-full  p-4 border-2 rounded-2xl' value={detail} onChange={(e)=>{
            setdetail(e.target.value);
            
          }}/>
            <button className="  w-full bg-gradient-to-r from-white to-gray-400 text-black font-semibold px-10 py-3 rounded-2xl hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-500">
            Add Note
        </button>
        </div>


          
   
      </form>
      
      <div className=' w-1/2 p-10 border-l-2 border-gray-700 '>
      <div className=' h-full overflow-auto '>
        
        <h1 className=' text-2xl font-bold mb-5'>Your Notes</h1>
        
         {tasks.map(function(elem,idx){
          return <div
  key={idx}
  className="relative bg-amber-50 text-black p-6 mb-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  {/* Delete Button */}
  <button
    onClick={() => handleDelete(idx)}
    className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition-colors"
  >
    <X size={20} />
  </button>

  {/* Title */}
  <h2 className="font-semibold text-xl mb-2 text-gray-900">{elem.title}</h2>

  {/* Detail */}
  <p className="text-gray-700 leading-relaxed">{elem.detail}</p>
</div>

         })}
       
       
      </div>
        
        
        
      </div>
     
      
     

    </div>
  )
}

export default App

