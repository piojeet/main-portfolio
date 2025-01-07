import React from 'react'
import Nav from '../../Nav'
import FrontEndHero from './FrontEndHero'
import ShowWorksMarquee from '../../marquee/ShowWorksMarquee'
import FrontEndStandout from './FrontEndStandout'
import FrontEndHowWeWork from './FrontEndHowWeWork'
import ReletiveWork from '../ReletiveWork'
import Footer from '../../Footer'
import FrontEndFAQ from './FrontEndFAQ'
import FrontendGlowUp from './FrontendGlowUp'
import ServicesMiniNav from '../ServicesMiniNav'

function ServicesFrontEndHome() {
  return (
    <div>
      <Nav />
      <FrontEndHero />
      <ShowWorksMarquee />
      <FrontEndStandout />
      <FrontEndHowWeWork />
      <ReletiveWork />
      <FrontEndFAQ />
      <FrontendGlowUp />
      <ServicesMiniNav />
      <Footer />
    </div>
  )
}

export default ServicesFrontEndHome