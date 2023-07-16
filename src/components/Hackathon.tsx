import SpotHelmetShield from './svg/SpotHelmetShield'

export default function Hackathon() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]' id='hackathon'>
      <div className='flex flex-col items-center justify-center h-full space-y-24'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-semibold uppercase'>Hackathon</h2>
          <h1 className='text-7xl max-w-4xl text-rome-red font-bold'>Tracks</h1>
        </div>
        <div className='flex flex-col items-center w-full space-y-8 md:flex-row md:items-start justify-evenly md:space-y-0'>
          <div className='flex flex-col items-center max-w-xs space-y-2'>
            <img src='/icon-spot-helmet-shield.svg' className='mb-2' />
            <h2 className='text-3xl text-rome-red font-bold'>Encryption Games</h2>
            <p className='text-center font-redhat'>
              This track will challenge hackers to explore the full potential of all those
              technologies and{' '}
              <span className='font-bold'>applications that prioritize privacy and security</span>.
            </p>
          </div>
          <div className='flex flex-col items-center max-w-xs space-y-4'>
            <img src='/icon-spot-hero.svg' className='mb-2' />
            <h2 className='text-3xl text-rome-red font-bold'>DAOs & Dragons</h2>
            <p className='text-center font-redhat'>
              Showcase your skills in implementing{' '}
              <span className='font-bold'>decentralized governance infrastructures</span> and
              <span className='font-bold'> better decision-making mechanisms</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
