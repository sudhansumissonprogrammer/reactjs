import React from 'react'

const App = () => {

  const [name, setName]=React.useState('');
  const submithandelera=(e)=>{
    e.preventDefault();
    console.log('form submitted by', name);
    setName('');
  }
  return ( 
    <div>
      <form onSubmit={(e)=>{
        submithandelera(e);
      }}>
        <input type="text" placeholder='enter your name' value={name}  onChange={(e)=>{
          setName(e.target.value);
      }}></input>
        
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
