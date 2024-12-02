import React from 'react'
import Nav from '../../Nav'
import WebSiteDesignHero from './WebSiteDesignHero'
import ShowWorksMarquee from '../../marquee/ShowWorksMarquee'
import WebDesignStandout from './WebDesignStandout'
import WebDesignHowWeWork from './WebDesignHowWeWork'
import ReletiveWork from '../ReletiveWork'
import WebDesignFAQ from './WebDesignFAQ'
import WebDesignGlowUp from './WebDesignGlowUp'
import Footer from '../../Footer'

function ServicesWebDesignHome() {
  return (
    <div>
      <Nav />
      <WebSiteDesignHero />
      <ShowWorksMarquee />
      <WebDesignStandout />
      <WebDesignHowWeWork />
      <ReletiveWork />
      <WebDesignFAQ />
      <WebDesignGlowUp />
      <Footer />
    </div>
  )
}

export default ServicesWebDesignHome