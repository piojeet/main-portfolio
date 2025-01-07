import React from 'react'
import Nav from '../Nav'
import ServicesHero from './ServicesHero'
import ServicesAbout from './ServicesAbout'
import ServicesOverview from './ServicesOverview'
import Expertic from '../Expertic'
import Cards from '../Cards'
import Footer from '../Footer'
import ServicesMiniNav from './ServicesMiniNav'

function ServicesHome() {
  return (
    <div>
      <Nav />
      <ServicesHero />
      <ServicesAbout />
      <ServicesOverview />
      <Expertic />
      <Cards />
      <ServicesMiniNav />
      <div className='mt-44'>
      <Footer />
      </div>
    </div>
  )
}

export default ServicesHome