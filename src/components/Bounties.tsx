export default function Bounties() {
  return (
    <div
      className='w-full h-screen md:h-[267px] md:w-screen bg-[#191818] relative px-0 py-36 md:py-0 xl:px-48'
      id='bounties'
    >
      <img src='/floating_coins.png' className='absolute hidden xl:block -top-12 left-8' />
      <img src='/floating_coins.png' className='absolute block md:hidden -top-12 left-8' />
      <div className='flex flex-col md:flex-row text-center md:text-left items-center justify-evenly my-auto h-full px-8 md:px-0'>
        <div className='relative z-20'>
          <h1 className='text-7xl font-bold text-[#FABB00]'>Bounties</h1>
          <img src='/splash_yellow_2.png' className='absolute bottom-1/2 translate-y-1/2' />
        </div>
        <h2 className='text-white max-w-xl text-xl font-light z-20'>
          <span className='font-bold text-[#FABB00]'>Spice up your project</span> and win big with
          sponsorship bounties! Experiment with new technologies and meet specific requirements to{' '}
          <span className='font-bold text-[#FABB00]'>earn thrilling rewards.</span>
        </h2>
      </div>
      <img src='/coins_right.svg' className='absolute bottom-0 right-0 hidden h-48 xl:block' />
      <img
        src='/coins_right_mobile.svg'
        className='absolute -bottom-4 left-1/2 right-1/2 -translate-x-1/2 block md:hidden z-0'
      />
    </div>
  )
}
