import Values from './Values'
import Achievement from './Achievement'
import Experience from './Experience'
import ValuedClients from './ValuedClients'
import Cta from '../home/CTA'
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