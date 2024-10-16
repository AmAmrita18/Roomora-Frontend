import React from 'react'
import HeroHome from './HeroHome'
import HomeServices from './HomeServices'
// import Feedback from './Feedback'
import FAQ from './FAQ'
import Cta from './Cta'
import Gallery from './Gallery'
import HomeProperties from './HomeProperties'
import HeroAbout from '../about/heroAbout'
import PropertiesSection from "../properties/PropertiesSection.jsx";


const Home = () => {
  return (
    <div>
        <PropertiesSection isHome={true}/>
        <HomeProperties />
        <HomeServices/>
        <Gallery/>
        {/* <Feedback/> */}
        <FAQ/>
        <Cta/>
    </div>
  )
}

export default Home