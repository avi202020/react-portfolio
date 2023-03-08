import React from 'react'

const Skills = () => {
  return (
    <div>
        <section id="bg-black" className='pb-5'>
        <div className="container">
        <div className="row py-5">
            <div className="col-lg-12">
                <h1 className='text-center text-warning display-4 fw-bold'>My Skills</h1>
                <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi veritatis nihil nemo veniam unde!</p>
            </div>
        </div>

         <div className="row pb-5">
            <div className="col-lg-5">
                 <p className='text-dark'>HTML</p>
                <div className='progress'>
                    <div className="progress-bar bg-warning" style={{width:"70%"}}>70%</div>
                </div>
                <p className='text-dark pt-2'>CSS</p>
                <div className='progress'>
                    <div className="progress-bar bg-warning" style={{width:"60%"}}>60%</div>
                </div>
                <p className='text-dark pt-2'>BOOTSTRAP</p>
                <div className='progress'>
                    <div className="progress-bar bg-warning" style={{width:"80%"}}>80%</div>
                </div>
             </div>

             <div className="col-lg-5 ms-5">
                 <p className='text-dark'>JAVASCRIPT</p>
                <div className='progress'>
                    <div className="progress-bar bg-warning" style={{width:"80%"}}>80%</div>
                </div>
                <p className='text-dark pt-2'>REACT.JS</p>
                <div className='progress'>
                    <div className="progress-bar bg-warning" style={{width:"75%"}}>75%</div>
                </div>
                <p className='text-dark pt-2'>FIGMA</p>
                <div className='progress'>
                    <div className="progress-bar bg-warning" style={{width:"65%"}}>65%</div>
                </div>
             </div>

         </div>
       
       </div>
       
        </section>

    </div>
  )
}

export default Skills
