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

function ServicesDesignSupportHome() {
  return (
    <div>
      <Nav />
      <DesignSupportHero />
      <ShowWorksMarquee />
      <DesignSupportStandout />
      <DesignSupportHowWeWork />
      <ReletiveWork />
      <DesignSupportFAQ />
      <DesignSupportGlowUp />
      <Footer />
    </div>
  )
}

export default ServicesDesignSupportHome