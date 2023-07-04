import { FC } from 'react'
import { PropsWithClassName } from '../types'

export const SponsorDeckLink: FC<PropsWithClassName> = ({ className }) => (
  <a href="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck" target="_blank" className={className}>
    <p>Request deck</p>
  </a>
)

export default function SponsorZone() {
  return (
    <div
      className='min-h-screen md:h-auto bg-[#191818] relative pt-24 md:pt-32 pb-48 xl:py-48 pl-0 md:pl-48'
      id='contact'
    >
      <div className='relative flex flex-col items-center justify-between max-w-xl pb-24 md:items-start'>
        <div className='flex flex-col items-center md:items-start justify-center '>
        <img src='/sponsor_crown.svg' className='h-[160px] w-[160px]' />
        <h1 className='text-5xl font-bold text-white md:text-7xl text-center'>Sponsor Zone</h1>
        <p className='text-white max-w-xs md:max-w-[385px] text-center md:text-left font-redhat mt-4'>
          Seize the chance to gain exceptional exposure, establish valuable connections, and
          demonstrate your unwavering support for the development of the blockchain space!
        </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-20'>
        <SponsorDeckLink className='w-full hover:bg-rome-purple_hover px-4 transition-colors bg-rome-purple drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium' />
        <a className='text-white text-center underline font-redhat mt-4' href="mailto:sponsor@ethrome.org">sponsor@ethrome.org</a>
        </div>
      </div>
      <img src='/temple.svg' className='absolute bottom-0 right-0 h-[261px] md:h-auto' />
    </div>
  )
}
