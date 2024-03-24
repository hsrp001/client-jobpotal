import React from 'react'
import image from '../../assets/images/post-a-job.svg'

function Homesubsection() {
  return (
    <div  className='p-3' >

    <div id='genrate' className=' p-10 h-10'></div>

    <h2 className=' px-9 text-3xl'>Get started in 3 easy steps</h2>
        <div className="conatiner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-8 p-10" >
       
       {
        [1,2,3].map(()=>
        
        <div className="box  p-6">
        <div className="img">

        <img src={image} alt="" />
        </div>

        <div className="text">

            <h2>Post a Job</h2>
            <p>Tell us what you need in a candidate in just 5-minutes.</p>
        </div>

        </div>
        
        )
       }
       

        </div>

        <div id='genrate' className=' p-10 h-10'></div>

    </div>
  )
}

export default Homesubsection