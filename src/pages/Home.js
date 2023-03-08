import React from 'react'
import Projects from '../pages/Projects'
import logo from '../assets/avi_photo.JPG'
import Skills from '../pages/Skills'

function Homepage() {
  return (
    <div className='homepage-container'>
      <div className='hero-section text-center'>
      <div className="row mb-5 mx-auto d-block" style={{height: '500px',width: '500px'}}>
        {/* <h1 >Avadhesh Mishra</h1> */}
        <img  src={logo} alt="My avatar" width="500" height="400" className="my-5"></img>
        </div>
      </div>
      <div className='brand-statement text-center'>
        <h2>Welcome to my portfolio!!</h2>
        {/* <img  src={logo} alt="My avatar" width="300" height="200" className="float-start"></img> */}

        <p>16+ Years of experience in Investment banking and Cybersecurity, rolling out productions in various
markets across the world, migration, version upgrade. Have extensive experience with build
architecture and automation, continuous delivery, and troubleshooting complex dependency
graphs, and also a software craftsman, applying state-of-the-art tools and methods to enable
efficiency, performance, and agility. Experience in migrating on-premises applications to Cloud
platform using rehost, re-platform and refactor strategy</p>
      </div>
      <Projects />
      <Skills />
      </div>
  )
}

export default Homepage