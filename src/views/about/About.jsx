import React from 'react'
import HeroAbout from './heroAbout'
import Values from './Values'
import Achievement from './Achievement'
import Experience from './Experience'
import ValuedClients from './valuedClients'
import Cta from '../home/Cta'

const About = () => {
  return (
    <div>
        <HeroAbout/>
        <Values/>
        <Achievement/>
        <Experience/>
        <ValuedClients/>
        <Cta/>
    </div>
  )
}

export default About