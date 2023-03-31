export default function Hackathon() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]' id='hackathon'>
      <div className='flex flex-col items-center justify-center h-full space-y-24'>
        <h1 className='text-6xl max-w-4xl text-[#A81010] font-bold'>Tracks</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start w-full justify-evenly space-y-8 md:space-y-0'>
          <div className='flex flex-col items-center space-y-2 max-w-xs'>
            <div className='relative'>
              <img src='/splash_white_1.png' />
              <img src='/gladiator-helm.png' className='absolute top-2 -left-0' />
            </div>
            <h2 className='text-3xl font-medium'>Game of ZKs</h2>
            <p className='text-center'>
              This track will challenge hackers to explore the full potential of ZKP
              technologies and develop novel <span className='font-bold'>applications
              that prioritize privacy and security.</span>
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 max-w-xs'>
            <div className='relative'>
              <img src='/splash_white_2.png' />
              <img src='/gladiator-sword.png' className='absolute bottom-0 -right-0' />
            </div>
            <h2 className='text-3xl font-medium'>DAOs & Dragons</h2>
            <p className='text-center'>
              Hackers will showcase their skills in implementing  <span className='font-bold'>decentralized
              governance infrastructures</span> and  <span className='font-bold'>decision-making mechanisms</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
