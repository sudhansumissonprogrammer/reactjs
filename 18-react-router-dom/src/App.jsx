import React from 'react'
import {Routes,Route} from  'react-router-dom'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Source from './pages/Source'
import Footer from './components/Footer'
import Pagenotfound from './pages/Pagenotfound'

const App = () => {
  return (
    <div className=''>
     

    <Navbar></Navbar>
    <Navbar2></Navbar2>
    

    <Footer></Footer>
        
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Source' element={<Source/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    
     </Routes>

      
      
    </div>
  )
}

export default App
