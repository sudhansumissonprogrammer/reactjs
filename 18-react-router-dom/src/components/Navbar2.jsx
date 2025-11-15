import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate=useNavigate();
  return (
    <div className=' bg-cyan-600 flex text-amber-50 font-bold items-center gap-x-10 p-5'>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-cyan-700 p-1.5 rounded'>
        Return To Home Page
      </button >
      <button onClick={()=>{
        navigate(-1)
      }} className='bg-cyan-700 p-1.5 rounded'>
        Back
      </button>
      <button onClick={()=>{
        navigate(+1)
      }} className='bg-cyan-700 p-1.5 rounded'> 
        Next
      </button>
    </div>
  )
}

export default Navbar2
