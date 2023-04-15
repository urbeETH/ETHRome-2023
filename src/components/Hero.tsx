import { Icon } from '@iconify/react'
import Header from './Header'

export default function Hero() {
  return (
    <div className='h-screen relative bg-[#EFEBE6] overflow-hidden'>
      <div className='flex flex-col items-center justify-start md:justify-center pt-28 md:pt-0 h-full'>
        <div className='flex flex-col md:flex-row items-center space-y-8 md:space-y-0 space-x-0 md:space-x-8 z-10 w-full md:w-auto'>
          <div className='relative'>
            <img src='splash_logo.png' className='hidden md:block' />
            <img
              src='ethrome_logo.svg'
              className='relative md:absolute md:bottom-20 md:right-4 h-56 md:h-auto'
            />
          </div>
          <div className='flex flex-col items-center md:items-start space-y-8 md:space-y-8 w-full md:w-auto px-4'>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-5xl md:text-7xl'>
                <span className='font-bold'>ETH</span>
                <span className='font-light'>Rome</span>
              </h1>
              <h2 className='text-2xl md:text-4xl font-normal text-center md:text-left max-w-[240px] md:max-w-none mt-2 md:mt-0'>
                Hacking history, shaping the future
              </h2>
            </div>
            <div className='hidden md:flex flex-col'>
              <h3 className='font-semibold text-xl'>6-8th October 2023</h3>
              <p className='text-xl'>Governance & Privacy Hackathon</p>
            </div>
            <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mt-4 w-5/6 space-y-4 md:space-y-0'>
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

        <div className='flex md:hidden flex-col text-black z-10 text-center absolute bottom-12'>
          <h3 className='font-semibold text-xl'>6-8th October 2023</h3>
          <p className='text-xl'>Governance & Privacy Hackathon</p>
        </div>
        <img
          src='splash_white_mobile.png'
          className='block md:hidden absolute -bottom-56 w-full z-0'
        />
      </div>
    </div>
  )
}
