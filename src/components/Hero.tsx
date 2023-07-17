import { Icon } from '@iconify/react'

export default function Hero() {
  return (
    <div className='h-calc-screen-75 relative mt-[75px] bg-[#EFEBE6]'>
      <div className='flex flex-col items-center justify-start h-full md:justify-center md:pt-0'>
        <div className='z-10 flex flex-col items-center justify-between w-full h-full space-x-0 md:flex-row md:space-y-0 md:space-x-8 md:w-auto'>
          {/* logo */}
          <div className='relative flex flex-col justify-center flex-auto'>
            <img src='splash_logo.png' className='hidden md:block' />

            <img
              src='ETHRome_logo_per_animazione.gif'
              className='relative w-[34vh] md:w-auto md:absolute md:bottom-12 md:-right-8 md:h-auto'
            />
          </div>

          {/* hacking history */}
          <div className='flex flex-col items-center w-full px-4 space-y-8 md:items-start md:space-y-8 md:w-auto'>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-4xl sm:text-5xl md:text-7xl'>
                <span className='font-bold'>ETH</span>
                <span className='font-light'>Rome</span>
              </h1>
              <h2 className='text-xl sm:text-2xl md:text-4xl font-normal text-center md:text-left max-w-[240px] md:max-w-none mt-2 md:mt-0'>
                Hacking history, shaping the future
              </h2>
            </div>
            <div className='flex-col hidden md:flex'>
              <h3 className='text-xl font-semibold'>6-8th October 2023</h3>
              <p className='text-xl'>Governance & Privacy Hackathon</p>
            </div>

            {/* hacker form link */}
            <div className='flex flex-col items-center w-5/6 mt-4 space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
              <a
                href='https://bit.ly/ethrome-hacker-form-2'
                rel='noreferrer'
                target='_blank'
                className='w-full md:w-40 bg-rome-purple hover:bg-rome-100 transition-colors drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium border-2 border-transparent'
              >
                <p>Apply to hack</p>
              </a>

              <a
                className='w-full md:w-40 text-rome-purple transition-colors drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center py-2 font-medium border-2 border-rome-purple hover:text-white hover:bg-rome-100 hover:border-transparent'
                href='https://twitter.com/ETHRome'
                target='_blank'
              >
                <Icon icon='mdi:twitter' className='text-2xl cursor-pointer' />
                <h2>Stay tuned</h2>
              </a>
            </div>
          </div>

          {/* dates */}
          <div className='flex flex-col justify-center flex-auto text-center text-black md:hidden'>
            <h3 className='text-xl font-semibold'>6-8th October 2023</h3>
            <p className='text-xl'>Governance & Privacy Hackathon</p>
          </div>
        </div>

        <img
          src='splash_white_mobile.png'
          className='absolute z-0 block w-full md:hidden -bottom-56'
        />
      </div>
    </div>
  )
}
