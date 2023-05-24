import React from 'react'
import HeroSectionComponent from './HeroSectionComponent'
import BodySectionComponent from './BodySectionComponent'
import FooterSectionComponent from './FooterSectionComponent'

function LandingPage() {
  return (
    <div>
        <HeroSectionComponent/>
        <BodySectionComponent/>
        <FooterSectionComponent/>
    </div>
  )
}

export default LandingPage