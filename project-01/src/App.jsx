import React from 'react'
import Card from './components/card.jsx'
function App (){
  return (
    <div className='parent'>
      
      <Card user='bapu' age={20} img='https://plus.unsplash.com/premium_photo-1761292485688-66093738b49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974'/>
      <Card user='Lapu' age={21} img='https://images.unsplash.com/photo-1760974015741-f70361c682f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935'/>
      <Card user='Sapu' age={22} img='https://images.unsplash.com/photo-1761165308179-d8de8f78bc49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
      
      
      
    </div>
    
  )
}
export default App