import { Icon } from '@iconify/react'

export default function Hero() {
  return (
    <div className='h-calc-screen-75 relative mt-[75px] bg-[#EFEBE6]'>

      <div className='flex flex-col items-center justify-start h-full md:justify-center md:pt-0'>

        <a
          className='absolute flex sm:hidden right-2 top-4 bg-[#4D9FEA] p-3 rounded-3xl gap-1 z-50'
          href='https://twitter.com/ethereumrome'
          target='_blank'
        >
          <Icon
              icon='mdi:twitter'
              className='text-2xl text-white cursor-pointer'
            />
            <h2 className='text-white'>Stay tuned</h2>
        </a>

        <div className='z-10 flex flex-col items-center justify-between w-full h-full space-x-0 md:flex-row md:space-y-0 md:space-x-8 md:w-auto'>
          {/* logo */}
          <div className='relative flex flex-col justify-center flex-auto'>
            <img src='splash_logo.png' className='hidden md:block' />
            <img
              src='ethrome_logo.svg'
              className='relative w-[28vh] md:w-auto md:absolute md:bottom-20 md:right-4 md:h-auto'
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

            {/* deck link */}
            <div className='flex flex-col items-center w-5/6 mt-4 space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
              <a href="https://bit.ly/hacker-form-ethrome" rel="noreferrer" target="_blank" className='w-full md:w-40 bg-[#8314C7] hover:bg-[#5b0e8b] transition-colors drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium'>
                <p>Apply to hack</p>
              </a>

              <div
                onClick={() => window.open('/ETHROME_SPONSOR_DECK.pdf', '_blank')}
                className='w-full md:w-40 bg-transparent border-2 border-[#8314C7] hover:border-[#5b0e8b] hover:text-[#5b0e8b] text-[#8314C7] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center py-2 font-medium cursor-pointer'
              >
                { /* <Icon icon='mdi:twitter' className='text-2xl cursor-pointer' /> */ }
                <p>Sponsor deck</p>
              </div>
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
