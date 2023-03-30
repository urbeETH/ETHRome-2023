export default function Intro() {
  return (
    <div
      className='h-auto md:h-screen relative bg-[#191818] overflow-hidden pt-12 pb-48 md:py-0'
      id='intro'
    >
      <div className='flex flex-col items-center justify-evenly space-y-12 md:space-y-0 h-full px-8 md:px-0'>
        <h1 className='text-4xl md:text-6xl max-w-4xl text-white'>
          The first Web3 international hackathon in the{' '}
          <span className='font-black text-[#FABB00]'>ETHernal city</span>
        </h1>
        <div className='flex space-x-0 md:space-x-24'>
          <img src='/colosseum.svg' className='hidden xl:block' />
          <div className='flex flex-col max-w-xs'>
            <div className='relative'>
              <img src='/splash_yellow.png' />
              <img src='/gladiator.png' className='absolute bottom-3 left-4' />
            </div>
            <p className='text-white text-lg mt-2 ml-2'>
              Join us to tackle web3 most pressing issues enhancing{' '}
              <span className='font-bold'>Governance & Privacy innovative solutions</span>.
            </p>
            <p className='text-white text-lg mt-2 ml-2'>
              Come to meet ETHalian builders while getting inspired by the historical beauty of
              Rome.
            </p>
          </div>
        </div>
      </div>
      <div className='absolute right-12 bottom-6 md:bottom-12 md:right-24'>
        <div className='relative'>
          <div className='flex items-center justify-end space-x-2'>
            <p className='text-white font-semibold'>HOSTED BY</p>
            <img src='/urbe_logo_white.png' />
          </div>
          <p className='text-white opacity-60 max-w-xs text-xs text-right'>
            A community based in Rome that aims to bring together local builders and foster
            knowledge-sharing about web3 and Ethereum-related topics.
          </p>
        </div>
      </div>
    </div>
  )
}
