import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

import Bounties from '../components/Bounties'
import Colosseum from '../components/Colosseum'
import Hackathon from '../components/Hackathon'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Partners from '../components/Partners'
import SponsorZone from '../components/SponsorZone'
import '../index.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className='flex flex-col relative overflow-hidden'>
      <Header />
      <Hero />
      <Intro />
      <Hackathon />
      <Bounties />
      <SponsorZone />
      <Partners />
      {/* <Contact /> */}
      <Colosseum />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>ETHRome</title>
    <meta
      name='description'
      content='The first web3 Hackathon in Rome focused on Governance and privacy-preserving technologies.'
    />
  </>
)
