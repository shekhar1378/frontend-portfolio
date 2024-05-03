import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { BrowserRouter, Link, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='text-white bg-zinc-900 w-full min-h-screen'>
     <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/hero' element={<Hero/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/projects' element={<Projects/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
