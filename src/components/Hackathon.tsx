import SpotHelmetShield from './animations/svg/SpotHelmetShield'
import SpotHero from './animations/svg/SpotHero'

export default function Hackathon() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]' id='hackathon'>
      <div className='flex flex-col items-center justify-center h-full space-y-24'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-semibold uppercase'>Hackathon</h2>
          <h1 className='text-7xl max-w-4xl text-rome-red font-bold'>Tracks</h1>
        </div>
        <div className='flex flex-col items-center w-full space-y-8 md:flex-row md:items-start justify-evenly md:space-y-0'>
          <div className='flex flex-col items-center max-w-xs space-y-4'>
            <SpotHelmetShield />
            <h2 className='text-3xl text-rome-red font-bold'>Encryption Games</h2>
            <p className='text-center font-redhat'>
              This track will challenge hackers to explore the full potential of all those
              technologies and{' '}
              <span className='font-bold'>applications that prioritize privacy and security</span>.
            </p>
            <div className='w-[280px] flex flex-col items-center justify-center relative overflow-hidden rounded-2xl pt-[12px] pb-[8px]'>
              <img src='/hackathon_prize_pool.png' className='absolute z-0' />
              <div className='flex flex-col items-center justify-center z-10'>
                <h1 className='text-rome-red font-bold mb-2'>TOTAL PRIZE POOL</h1>
                <div className='flex items-center'>
                  <span className='text-[#13080E] text-opacity-[0.56] font-extrabold text-3xl'>
                    $
                  </span>
                  <h2 className='text-rome-red text-5xl px-2 font-black'>7.5</h2>
                  <span className='text-[#13080E] text-opacity-[0.56] font-extrabold text-3xl'>
                    K
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center max-w-xs space-y-4'>
            <SpotHero />
            <h2 className='text-3xl text-rome-red font-bold'>DAOs & Dragons</h2>
            <p className='text-center font-redhat'>
              Showcase your skills in implementing{' '}
              <span className='font-bold'>decentralized governance infrastructures</span> and
              <span className='font-bold'> better decision-making mechanisms</span>.
            </p>

            <div className='w-[280px] flex flex-col items-center justify-center relative overflow-hidden rounded-2xl pt-[12px] pb-[8px]'>
              <img src='/hackathon_prize_pool.png' className='absolute z-0' />
              <div className='flex flex-col items-center justify-center z-10'>
                <h1 className='text-rome-red font-bold mb-2'>TOTAL PRIZE POOL</h1>
                <div className='flex items-center'>
                  <span className='text-[#13080E] text-opacity-[0.56] font-extrabold text-3xl'>
                    $
                  </span>
                  <h2 className='text-rome-red text-5xl px-2 font-black'>7.5</h2>
                  <span className='text-[#13080E] text-opacity-[0.56] font-extrabold text-3xl'>
                    K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
