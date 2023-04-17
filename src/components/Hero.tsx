import { Icon } from '@iconify/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import EthromeLogo from '../images/vector/ethrome_logo.svg'

export default function Hero() {
  return (
    <div className='h-screen relative bg-[#EFEBE6] overflow-hidden'>
      <div className='flex flex-col items-center justify-start h-full md:justify-center pt-28 md:pt-0'>
        <div className='z-10 flex flex-col items-center w-full space-x-0 space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:w-auto'>
          <div className='relative'>
            <StaticImage
              src='../images/splash_logo.png'
              alt='splash logo'
              className='hidden md:block'
            />
            <EthromeLogo className='relative h-56 md:absolute md:bottom-20 md:right-4 md:h-auto' />
          </div>
          <div className='flex flex-col items-center w-full px-4 space-y-8 md:items-start md:space-y-8 md:w-auto'>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-5xl md:text-7xl'>
                <span className='font-bold'>ETH</span>
                <span className='font-light'>Rome</span>
              </h1>
              <h2 className='text-2xl md:text-4xl font-normal text-center md:text-left max-w-[240px] md:max-w-none mt-2 md:mt-0'>
                Hacking history, shaping the future
              </h2>
            </div>
            <div className='flex-col hidden md:flex'>
              <h3 className='text-xl font-semibold'>6-8th October 2023</h3>
              <p className='text-xl'>Governance & Privacy Hackathon</p>
            </div>
            <div className='flex flex-col items-center w-5/6 mt-4 space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
              <div
                onClick={() => window.open('/ETHROME_SPONSOR_DECK.pdf', '_blank')}
                className='w-full md:w-40 bg-[#8314C7] hover:bg-[#5b0e8b] transition-colors drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium cursor-pointer'
              >
                <p>Sponsor deck</p>
              </div>

              <div
                onClick={() => window.open('https://twitter.com/ethereumrome', '_blank')}
                className='w-full md:w-40 bg-transparent border-2 border-[#8314C7] hover:border-[#5b0e8b] hover:text-[#5b0e8b] text-[#8314C7] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center py-2 font-medium cursor-pointer'
              >
                <Icon icon='mdi:twitter' className='text-2xl cursor-pointer' />
                <p>Stay tuned</p>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute z-10 flex flex-col text-center text-black md:hidden bottom-12'>
          <h3 className='text-xl font-semibold'>6-8th October 2023</h3>
          <p className='text-xl'>Governance & Privacy Hackathon</p>
        </div>
        <StaticImage
          src='../images/splash_white_mobile.png'
          alt='splash white mobile'
          className='absolute z-0 block w-full md:hidden -bottom-56'
          imgStyle={{ objectFit: 'fill' }}
        />
      </div>
    </div>
  )
}
