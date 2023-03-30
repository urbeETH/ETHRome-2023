export default function Hackathon() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]' id='hackathon'>
      <div className='flex flex-col items-center justify-center h-full space-y-24'>
        <h1 className='text-6xl max-w-4xl text-[#A81010] font-bold'>Hackathon</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start w-full justify-evenly space-y-8 md:space-y-0'>
          <div className='flex flex-col items-center space-y-2 max-w-xs'>
            <div className='relative'>
              <img src='/splash_white_1.png' />
              <img src='/senator.png' className='absolute top-2 -left-4' />
            </div>
            <p className='text-[#A81010] font-bold'>TRACK 1</p>
            <h2 className='text-3xl font-medium'>Governance & Privacy</h2>
            <p className='text-center'>
              The ancient Roman Empire was known for its sophisticated governance systems and a
              strong emphasis on privacy. We’d love to see you innovating in the space of DAOs
              governance and privacy technology (zK and encryption).
            </p>
          </div>
          <div className='flex flex-col items-center space-y-2 max-w-xs'>
            <div className='relative'>
              <img src='/splash_white_2.png' />
              <img src='/scroll.png' className='absolute bottom-0 -right-0' />
            </div>
            <p className='text-[#A81010] font-bold'>TRACK 2</p>
            <h2 className='text-3xl font-medium'>General</h2>
            <p className='text-center'>
              If you are developing anything else, you can still compete for the general track with
              all sorts of projects. Get creative with DeFI, NFTs, gaming, decentralized social
              networks and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
