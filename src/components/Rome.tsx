export default function Rome() {
  return (
    <div className='h-auto bg-[#191818] relative pt-24 pb-48 xl:py-48 pl-8 md:pl-48' id='rome'>
      <div className='flex flex-col justify-center max-w-xs space-y-4 relative'>
        <img src='/shoe.png' className='h-[152px] w-[168px]' />
        <img
          src='/red_splash.png'
          className='absolute bottom-1/2 md:bottom-auto md:top-1/3 left-1/2 md:-left-16'
        />
        <h1 className='font-bold text-white text-7xl'>Rome</h1>
        <h2 className='font-semibold text-white text-4xl'>
          The <span className='text-[#F53838]'>ETHernal</span> city
        </h2>
        <p className='text-white'>
          All roads lead to Rome, and so do the top Ethereum builders in Europe.
        </p>
        <p className='text-white'>
          Taking place in Rome, a city renowned for its history, art, and culture, the event
          provides an opportunity for participants to experience the intersection of technology and
          tradition.
        </p>
      </div>
      <img src='/temple.png' className=' absolute bottom-0 right-0' />
    </div>
  )
}
