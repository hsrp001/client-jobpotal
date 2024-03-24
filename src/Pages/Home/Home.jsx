import React from 'react'
import Navbar from '../Layout/Navbar'
import HeroSection from './Herosection'
import Seachjobs from './Seachjobs'
import Homesubsection from './Homesubsection'

function Home() {
  return (
    <div>
        
        <HeroSection></HeroSection>
        <Seachjobs></Seachjobs>
       <Homesubsection></Homesubsection>
    </div>
  )
}

export default Home