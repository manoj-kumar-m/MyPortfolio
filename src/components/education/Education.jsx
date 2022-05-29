import React from "react"
import "./Education.css"
import EducationData from "./EducationData"
import EducationCard from "./EducationCard"

const Education = () => {
  return (
    <>
      <section className='Resume' id='education'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
                <div className='heading'>
                    <h4>2007-Present</h4>
                    <h1>Education</h1>
                </div>

                <div className='content'>
                    {EducationData.map((val, id) => {
                         return  val.category === "education" &&  <EducationCard key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                      
                   
                    })}

                </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2022-present</h4>
                <h1>Experience</h1>
              </div>

              <div className='content'>
                {EducationData.map((val, index) => {
                  return (val.category === "experience") && <EducationCard key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education