import React from 'react'
import Nav from '../Nav'
import AboutHero from './AboutHero'
import AboutIntro from './AboutIntro'
import AboutSkills from './AboutSkills'
import Cards from '../Cards'
import Expertic from '../Expertic'
import Footer from '../Footer'

function AboutHome() {
  return (
    <>
        <Nav />
        <AboutHero />
        <AboutIntro />
        <AboutSkills />
        <Expertic />
        <Cards />
        <div className='mt-52'>
        <Footer />
        </div>
    </>
  )
}

export default AboutHome