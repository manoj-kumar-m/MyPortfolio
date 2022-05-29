import React from 'react'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
const App = () => {
  return (
      <>
        <Header />
        <Home />
        <Education />
        <Projects />
        <Blog />
        <Contact/>
     
      </>
  )
}

export default App
