export default function Bounties() {
  return (
    <div className='w-full h-screen md:h-[267px] md:w-screen bg-[#191818] relative'>
      <img src='/floating_coins.png' className='absolute hidden xl:block -top-12 left-8' />
      <img src='/floating_coins.png' className='absolute block sm:hidden -top-12 left-8' />
      <div className='flex flex-col md:flex-row text-center md:text-left items-center justify-evenly my-auto h-full px-8 md:px-0'>
        <div className='relative z-20'>
          <h1 className='text-7xl font-bold text-[#FABB00]'>Bounties</h1>
          <img src='/splash_yellow_2.png' className='absolute bottom-1/2 translate-y-1/2' />
        </div>
        <h2 className='text-white max-w-xl text-xl font-medium z-20'>
          Spice up your project and win big with{' '}
          <span className='font-bold text-[#FABB00]'>sponsorship bounties!</span> Experiment with
          new technologies and meet specific requirements to earn exciting rewards.
        </h2>
      </div>
      <img src='/coins.png' className='absolute bottom-0 right-0 hidden xl:block' />
      <img src='/coins_mobile.png' className='absolute bottom-0 block xl:hidden z-0' />
    </div>
  )
}
