import React, { useState } from 'react'
import Movies from './pages/Movies'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

const App = () => {
  
  return (
    <div className=' bg-[#110e1b] text-white'>
      <Navbar/>
      {/* <Carousel/> */}
      <Movies/>
    </div>
  )
}

export default App