import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './global.css'
import Bio from './pages/Bio'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Home/> 
  <Bio/> 
  <Skills/>
  <Project/>
  <Contact/>
  
 
  </React.StrictMode>,
)
