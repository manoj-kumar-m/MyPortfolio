import React, {useEffect} from 'react'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
const App = () => {
  useEffect(() => {
    
    let progress = document.getElementById('progressbar')
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = () => {
      let progHeight = (window.pageYOffset / totalHeight) * 102;
      progress.style.height = progHeight + "%";
    }
  
  }, [])
  

  return (
    <>
      <div id="progressbar"></div>
      <div id="scrollbar"></div>
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
