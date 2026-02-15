import React from 'react'
import Nav from '../../Nav'
import DesignSupportHero from './DesignSupportHero'
import ShowWorksMarquee from '../../marquee/ShowWorksMarquee'
import DesignSupportStandout from './DesignSupportStandout'
import DesignSupportHowWeWork from './DesignSupportHowWeWork'
import ReletiveWork from '../ReletiveWork'
import DesignSupportFAQ from './DesignSupportFAQ'
import DesignSupportGlowUp from './DesignSupportGlowUp'
import Footer from '../../Footer'
import ServicesMiniNav from '../ServicesMiniNav'

function ServicesDesignSupportHome() {
  return (
    <div>
      <h1 className='sr-only'>Design Support Services by Priyajeet Majhi</h1>
      <Nav />
      <DesignSupportHero />
      <ShowWorksMarquee />
      <DesignSupportStandout />
      <DesignSupportHowWeWork />
      <ReletiveWork />
      <DesignSupportFAQ />
      <DesignSupportGlowUp />
      <ServicesMiniNav />
      <Footer />
    </div>
  )
}

export default ServicesDesignSupportHome
