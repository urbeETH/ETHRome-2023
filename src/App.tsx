import ThemeSwitch from './components/ThemeSwitch'
import TwitterIcon from './components/TwitterIcon'

function App() {
  return (
    <div className='min-h-screen relative bg-white dark:bg-black transition-colors w-full flex flex-col md:flex-row items-center space-x-0 md:space-x-16 space-y-8 md:space-y-0 justify-center'>
      <div className='absolute top-2 right-2'>
        <ThemeSwitch />
      </div>
      <img
        src='/logo_black.svg'
        alt='logo'
        className='h-48 md:h-72 block dark:hidden select-none'
      />
      <img
        src='/logo_white.svg'
        alt='logo'
        className='h-48 md:h-72 hidden dark:block select-none'
      />
      <div className='flex flex-col items-center md:items-start text-black dark:text-white'>
        <h1 className='text-4xl md:text-6xl font-roboto tracking-tighter'>
          <span className='font-semibold tracking-[-0.1em] mr-2'>ETH</span>Rome
        </h1>
        <h2 className='text-base md:text-2xl'>Hacking history, shaping the future</h2>
        <p className='text-sm md:text-xl mt-2'>October 2023</p>
        <div
          onClick={() => window.open('https://twitter.com/ethereumrome')}
          className='bg-[#1DA1F2] text-white hover:bg-[#0b83cd] flex space-x-2 items-center hover:text-gray-200 transition-colors cursor-pointer px-4 py-2 rounded-lg font-roboto font-semibold mt-4'
        >
          <TwitterIcon fill='#ffffff' height={20} width={20} />
          <span>Twitter</span>
        </div>
      </div>
    </div>
  )
}

export default App
