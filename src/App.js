import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Channel from './pages/Channel'
import Developer from './pages/Developer'
import Gsap from './pages/Gsap'
import Home from './pages/Home'
import Not from './pages/Not'
import Port from './pages/Port'
import Search from './pages/Search'
import Today from './pages/Today'
import Video from './pages/Video'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Youtube from './pages/Youtube'


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/today' element={<Today/>}/>
        <Route path='/developer' element={<Developer/>}/>
        <Route path='/webd' element={<Webd/>}/>
        <Route path='/website' element={<Website/>}/>
        <Route path='/gsap' element={<Gsap/>}/>
        <Route path='/port' element={<Port/>}/>
        <Route path='/youtube' element={<Youtube/>}/>
        <Route path='/channel/:channelId' element={<Channel/>}/>
        <Route path='/video/:videoId' element={<Video/>}/>
        <Route path='/search/:searchId' element={<Search/>}/>
        <Route path='*' element={<Not/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App