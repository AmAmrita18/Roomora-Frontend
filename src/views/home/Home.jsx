import HomeServices from './HomeServices'
// import Feedback from './Feedback'
import FAQ from './FAQ'
import Gallery from './Gallery'
import HomeProperties from './HomeProperties'
import PropertiesSection from "../properties/PropertiesSection.jsx";
import Cta from './CTA.jsx';


const Home = () => {
  return (
    <div>
        <PropertiesSection isHome={true}/>
        <HomeProperties />
        <HomeServices/>
        <Gallery/>
        {/* <Feedback/> */}
        <FAQ/>
        <Cta />
    </div>
  )
}

export default Home