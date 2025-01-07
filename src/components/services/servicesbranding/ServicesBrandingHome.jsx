import React from 'react'
import BrandingHero from './BrandingHero'
import Nav from '../../Nav'
import BrandingStandout from './BrandingStandout'
import BrandingHowWeWork from './BrandingHowWeWork'
import ReletiveWork from '../ReletiveWork'
import ServicesBrandindFAQ from './ServicesBrandindFAQ'
import BrandingGlowUp from './BrandingGlowUp'
import Footer from '../../Footer'
import ServicesMiniNav from '../ServicesMiniNav'

function ServicesBrandingHome() {

  return (
    <>
    <Nav />
    <BrandingHero />
    <BrandingStandout />
    <BrandingHowWeWork />
    <ReletiveWork />
    <ServicesBrandindFAQ />
    <BrandingGlowUp />
    <ServicesMiniNav />
    <Footer />
    </>
  )
}

export default ServicesBrandingHome