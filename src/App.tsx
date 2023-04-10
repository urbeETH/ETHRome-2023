import Hero from './components/Hero'
import Intro from './components/Intro'
import Hackathon from './components/Hackathon'
import Bounties from './components/Bounties'
import Rome from './components/Rome'
import Contact from './components/Contact'
import FloatingIcons from './components/FloatingIcons'
import Sponsors from './components/Sponsors'
import Faq from './components/Faq'

function App() {
  return (
    <div className='flex flex-col relative overflow-hidden'>
      <FloatingIcons />
      <Hero />
      <Intro />
      <Hackathon />
      <Bounties />
      <Rome />
      <div className='hidden md:block w-screen h-[16px] md:h-[35px] bg-[#FFF8E7]' />
      <div className='w-screen h-[16px] md:h-[35px] bg-[#191818]' />
      <Contact />
    </div>
  )
}

export default App
