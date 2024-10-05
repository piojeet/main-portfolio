import React from 'react'
import Nav from '../Nav'
import Expertic from '../Expertic'
import Cards from '../Cards'
import ProjectTell from '../ProjectTell'
import ContactHome from '../ContactHome'
import Footer from '../Footer'
import ProjectHero from './ProjectHero'
import AllProjects from './AllProjects'

function ProjectHome() {
  return (
    <>
      <div>
        <Nav />
        <ProjectHero />
        <AllProjects />
        <div>
          <Expertic />
          <Cards />
        </div>
        <div className='my-24 mt-44'>
          <ProjectTell />
        <ContactHome />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProjectHome