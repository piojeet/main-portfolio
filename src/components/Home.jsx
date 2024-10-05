import React from 'react'
import Nav from './Nav'
import HomeHero from './HomeHero'
import Video from './Video'
import Expertic from './Expertic'
import Cards from './Cards'
import WorksDesignHome from './WorksDesignHome'
import ProjectTell from './ProjectTell'
import ContactHome from './ContactHome'
import Testimonials from './Testimonials'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Nav />
        <HomeHero />
        <Video />
        <Expertic />
        <Cards />
        <WorksDesignHome />
        <ProjectTell />
        <ContactHome />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home