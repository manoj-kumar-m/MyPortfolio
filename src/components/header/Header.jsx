import React, { useState } from "react"
import "./Header.css"
// import logo from "../pic/logo.png"

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 90)
  })

  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <h3>MKM</h3>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
             
              <li><a href='#home'>home</a></li>
              <li><a href='#education'>education</a></li>
              <li><a href='#skills'>skills</a></li>
              <li><a href='#projects'>projects</a></li>
              <li><a href='#blog'>blog</a></li>
              <li><a href='#contact'>contact</a></li>
              <li>
                <button className='home-btn'>BUY NOW</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='bx bx-x close home-btn'></i> : <i className='bx bx-menu open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header