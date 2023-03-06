import React from 'react'
import "./Home.css"
import home from "../Images/bg_1.png"
import About from './About'
import Service from './Service'
import Skills from './Skills'
import Project from './Project'
import Team from './Team'
import Contact from './Contact'
import img1 from "../Images/about.jpg"

const Home = () => {
  return (
    <div>
 
     <section id="bg-black" className='pb-5 py-5'>
     <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5">
            <span className='display-5 text-light'>Hello</span>
            <h1 className="display-2 fw-bold text-light">I'm Mohd 
             <h1 className='display-2 fw-bold'id="text-color"> zafar</h1></h1>
             <h4 className='pb-3'>A Freelancer web Designer</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores explicabo consequuntur possimus veniam enim, repellat ratione quod voluptas provident, nesciunt adipisci magni? Earum qui praesentium, illum nemo impedit recusandae.</p>
             <a href={img1} download className='btn btn-outline-warning me-3 btn-yellow'>Download Resume</a>
             <a href="/project" className='btn btn-outline-primary btn-blue'>My Work</a>

          </div>
          <div className="col-lg-6 ">
            <figure>
              <img src={home} id="fixed-img"/>
            </figure>
          </div>
        </div>
       </div>
     </section>
     <About/>
     <Service/>
     <Skills/>
      <Project/>
      <Team/>
      <Contact/>
      
    </div>
  )
}

export default Home