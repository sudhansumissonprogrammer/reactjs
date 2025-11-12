import React from 'react'
import { useState } from 'react'
const App = () => {
const [num, setName] = React.useState({username:'Sudhansu', age:24 });
function btnClicked(){
  setName({username:'John', age:30 });
}
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold underline'>Hello {num.username} , Your age is {num.age} </h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={btnClicked}>Click Me</button>
     

    </div>
  )
}

export default App
v   