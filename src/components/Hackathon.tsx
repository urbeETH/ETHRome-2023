import React from 'react'

import IconSpotHelmetShield from '../images/vector/icon-spot-helmet-shield.svg'
import IconSpotHero from '../images/vector/icon-spot-hero.svg'

export default function Hackathon() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]' id='hackathon'>
      <div className='flex flex-col items-center justify-center h-full space-y-24'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-semibold uppercase'>Hackathon</h2>
          <h1 className='text-7xl max-w-4xl text-[#A81010] font-bold'>Tracks</h1>
        </div>
        <div className='flex flex-col items-center w-full space-y-8 md:flex-row md:items-start justify-evenly md:space-y-0'>
          <div className='flex flex-col items-center max-w-xs space-y-2'>
            <IconSpotHelmetShield className='mb-2' />
            <h2 className='text-3xl text-[#A81010] font-bold'>Game of ZKs</h2>
            <p className='text-center'>
              This track will challenge hackers to explore the full potential of ZKP technologies
              and develop novel{' '}
              <span className='font-bold'>applications that prioritize privacy and security</span>.
            </p>
          </div>
          <div className='flex flex-col items-center max-w-xs space-y-4'>
            <IconSpotHero className='mb-2' />
            <h2 className='text-3xl text-[#A81010] font-bold'>DAOs & Dragons</h2>
            <p className='text-center'>
              Hackers will showcase their skills in implementing{' '}
              <span className='font-bold'>decentralized governance infrastructures</span> and
              <span className='font-bold'>decision-making mechanisms</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
