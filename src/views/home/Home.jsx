import React from 'react'
import HeroHome from './HeroHome'
import HomeServices from './HomeServices'
import Feedback from './Feedback'
import FAQ from './FAQ'
import Cta from './Cta'
import Gallery from './Gallery'
import HomeProperties from './HomeProperties'

const Home = () => {
  return (
    <div>
        <HeroHome/>
        <HomeProperties />
        <HomeServices/>
        <Gallery/>
        <Feedback/>
        <FAQ/>
        <Cta/>
    </div>
  )
}

export default Home