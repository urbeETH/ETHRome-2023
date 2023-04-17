import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'

import { PropsWithClassName } from '@/types'

import CoinsRight from '../images/vector/coins_right.svg'
import CoinsRightMobile from '../images/vector/coins_right_mobile.svg'

const FloatingCoins: FC<PropsWithClassName> = ({ className }) => (
  <StaticImage src='../images/floating_coins.png' alt='floating coins' className={className} />
)

export default function Bounties() {
  return (
    <div
      className='w-full h-screen md:h-[267px] md:w-screen bg-[#191818] relative px-0 py-36 md:py-0 xl:px-48'
      id='bounties'
    >
      <FloatingCoins className='absolute hidden xl:block -top-12 left-8' />
      <FloatingCoins className='absolute block md:hidden -top-12 left-8' />
      <div className='flex flex-col items-center h-full px-8 my-auto text-center md:flex-row md:text-left justify-evenly md:px-0'>
        <div className='relative z-20'>
          <h1 className='text-7xl font-bold text-[#FABB00]'>Bounties</h1>
          <StaticImage
            src='../images/splash_yellow_2.png'
            alt='splash yellow'
            className='absolute -translate-x-full -bottom-6 w-[156px] h-[118px]'
          />
        </div>
        <h2 className='z-20 max-w-xl text-xl font-light text-white'>
          <span className='font-bold text-[#FABB00]'>Spice up your project</span> and win big with
          sponsorship bounties! Experiment with new technologies and meet specific requirements to{' '}
          <span className='font-bold text-[#FABB00]'>earn thrilling rewards.</span>
        </h2>
      </div>
      <CoinsRight className='absolute bottom-0 right-0 hidden h-48 xl:block' />
      <CoinsRightMobile className='absolute z-0 block -translate-x-1/2 -bottom-4 left-1/2 right-1/2 md:hidden' />
    </div>
  )
}
