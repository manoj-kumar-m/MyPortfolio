import React from "react"
import "./Home.css"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Manoj Kumar. M</span>
            </h1>
            <h2 className="typo">
              a
              <span>
                <Typewriter
                  options={{
                    strings: ['Web Developer','Frontend Developer', 'Full Stack Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                  
                />
              </span>
            </h2>

            <p>I love building web apps for productive uses and am a passionate learner and coder. I am also a competitive coding enthusiast and am working on excelling at these skills.</p>

            <div className='hero_btn'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button '>
                    <a href="https://github.com/manoj-kumar-m"  target='blank'>
                      <button className='btn_shadow'>
                          <i class='bx bxl-github'></i>
                      </button>
                    </a>
                  <a href="https://www.linkedin.com/in/manoj-kumar-m631/" target='blank'> 
                    <button className='btn_shadow'>
                      <i class='bx bxl-linkedin'></i>
                      </button>
                  </a>
                  <a href="https://instagram.com/manoj__kumar__m"  target='blank'>
                      <button className='btn_shadow'>
                        <i class='bx bxl-instagram'></i>
                      </button>
                  </a>

                </div>
              </div>
              <div className='col_1'>
                <h4>My Resume</h4>
                
                <a  href="./assets/pdf/Manoj_Kumar_M_Resume.pdf" target='blank'>
                  <button className='btn_shadow'>Download CV</button>
                </a>
                
               
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <h1>MKM</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home