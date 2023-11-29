import React from 'react'

import Navbar from './components/Navbar'


import Path from './routes/Path'
import Carousel from './components/Carousel'
import Trending from './pages/Movies'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const App = () => {
  
  return (
    <MantineProvider>
      <div className=' bg-white h-fit'>

{/* <Path/> */}
<Trending/>

</div>
    </MantineProvider>
    
  )
}

export default App