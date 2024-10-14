import React from 'react'
import HeroAbout from './heroAbout'
import Values from './Values'
import Achievement from './Achievement'
import Experience from './Experience'
import ValuedClients from './valuedClients'
import Cta from '../home/Cta'
import HeroHome from '../home/HeroHome'

const About = () => {
  return (
    <div>
        <HeroHome/>
        <Values/>
        <Achievement/>
        <Experience/>
        <ValuedClients/>
        <Cta/>
    </div>
  )
}

export default About