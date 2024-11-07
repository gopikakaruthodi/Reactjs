import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
