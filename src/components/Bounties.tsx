export default function Bounties() {
  return (
    <div
      className='w-full h-screen md:h-[267px] md:w-screen bg-[#191818] relative px-0 pt-36 pb-48 md:py-0 xl:px-48'
      id='bounties'
    >
      <img src='/floating_coins.png' className='absolute hidden xl:block -top-12 left-8' />
      <img src='/floating_coins.png' className='absolute block md:hidden -top-12 left-8' />

      <div className='flex flex-col items-center h-full px-8 my-auto text-center md:flex-row md:text-left justify-evenly md:px-0'>
        <div className='relative z-20'>
          <h1 className='text-7xl font-bold text-[#FABB00]'>Bounties</h1>
          <img src='/splash_yellow_2.png' className='absolute translate-y-1/2 bottom-1/2' />
        </div>
        <h2 className='z-20 max-w-xl text-xl font-light text-white bg-[#191818] font-redhat'>
          <span className='font-bold text-[#FABB00]'>Spice up your project</span> and win big with
          sponsorship bounties! Experiment with new technologies and meet specific requirements to{' '}
          <span className='font-bold text-[#FABB00]'>earn thrilling rewards.</span>
        </h2>
      </div>

      <img src='/coins_right.svg' className='absolute bottom-0 right-0 hidden h-48 xl:block' />
      <img
        src='/coins_right_mobile.svg'
        className='absolute z-0 block -translate-x-1/2 -bottom-4 left-1/2 right-1/2 md:hidden'
      />
    </div>
  )
}
