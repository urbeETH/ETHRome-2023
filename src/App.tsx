import Hero from './components/Hero'
import Intro from './components/Intro'
import Hackathon from './components/Hackathon'
import Bounties from './components/Bounties'
import Venue from './components/Venue'
import SideEvents from './components/SideEvents'
import SponsorZone from './components/SponsorZone'
import Header from './components/Header'
import Partners from './components/Partners'
import Colosseum from './components/Colosseum'
import Sponsors from './components/Sponsors'

function App() {
  return (
    <>
      <div className='relative flex flex-col overflow-hidden'>
        <Header />
        <Hero />
        <Intro />
        <Hackathon />
        <Bounties />
        <Venue />
        <SideEvents />
        <SponsorZone />
        <Sponsors />
        <Partners />
        {/* <Contact /> */}
        <Colosseum />
      </div>
    </>
  )
}

export default App
