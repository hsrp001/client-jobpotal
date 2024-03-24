import React from 'react'
import ladingimage  from  '../../assets/images/landing_hero.png'
function HeroSection() {
  return (
    <div className='  w-full  bg-blue-100 pt-10 '>

        <div className="container  mt-10 ">


            <div className="text text-center">

                <h2  className='  text-4xl pt-7'>India’s Largest Job Portal</h2>
                <h3>WorkIndia helps you hire staff in 2 days</h3>

            </div>


            <div className="img  m-auto   w-11/12   sm:w-10/12   md:w-1/2">

                <img src={ladingimage} alt="" srcset="" />

            </div>

            <div className="buttons flex gap-5 justify-center flex-wrap">

            <div className=' bg-blue-950 p-3 rounded-sm text-white  min-w-60 text-center cursor-pointer'>Continue job posting</div>
            <div className=' bg-blue-950 p-3 rounded-sm text-white min-w-60 text-center cursor-pointer'>Get job</div>


            </div>

        </div>


    </div>
  )
}

export default HeroSection