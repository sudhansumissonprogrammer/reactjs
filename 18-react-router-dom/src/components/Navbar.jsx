import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex font-bold items-center justify-between px-8 py-5 bg-cyan-600 text-amber-50'>
      <h3>Sudhansu</h3>
      <div className='flex items-center justify-between gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Source'>Source</Link>
      </div>
      
    </div>
  ) 
}

export default Home
