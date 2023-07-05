export default function SideEvents() {
  return (
    <div className='h-auto py-24 2xl:py-0 xl:h-screen relative bg-[#EFEBE6]' id='sideEvents'>
      <div className='flex flex-col items-center justify-center h-full space-y-24'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-7xl w-4/5 md:w-full md:max-w-4xl text-rome-red text-center font-bold'>
            Side Events
          </h1>
        </div>
        <div className=' w-4/5 md:w-2/4 text-rome-red text-center font-redhat space-y-4'>
          Side events offer a dynamic platform for participants, communities, and sponsors to derive
          additional value and engagement beyond the core hackathon experience. These events serve
          as catalysts for networking, learning, and fostering collaboration.
        </div>
        <div className='flex flex-col items-center w-4/5 space-y-8 md:flex-row md:items-start justify-evenly md:space-y-0'>
          <div className='flex flex-col items-center p-4 space-y-4'>
            <div className='flex justify-center items-center w-full h-52 '>
              <img
                className='md:hover:scale-110 transition-all duration-700'
                src='/side-events_urbetalks.png'
                alt=''
              />
            </div>
            <h2 className='text-3xl text-rome-red text-center font-bold'>Wed 4th Oct</h2>
            <h2 className='text-3xl text-rome-red text-center font-bold'>Talent Garden Ostiense</h2>
            <p className='text-center font-redhat'>
              Urbe.eth monthly meetup hosting 4 speakers delving into various topics
            </p>
          </div>
          <div className='flex flex-col items-center p-4 space-y-4'>
            <div className='flex justify-center items-center w-full h-52 '>
              <img
                className='md:hover:scale-110 transition-all duration-700'
                src='/side-events_web3privacy.png'
                alt=''
              />
            </div>
            <h2 className='text-3xl text-rome-red font-bold text-center'>Thu 5th Oct</h2>
            <h2 className='text-3xl text-rome-red font-bold text-center'>Villaggio Globale</h2>
            <p className='text-center font-redhat'>
              Global privacy advocates converge to mainstream privacy in Web3.
            </p>
          </div>
          <div className='flex flex-col items-center p-4 space-y-4'>
            <a
              className='w-full cursor md:hover:scale-110 transition-all duration-700'
              href='mailto:sponsor@ethrome.org'
            >
              <div className='flex justify-center items-center w-full h-36 md:h-52 border-4 border-rome-red rounded-[2rem] text-rome-red text-6xl'>
                +
              </div>
            </a>
            <h2 className='text-3xl text-rome-red font-bold text-center'>
              Your side event goes here
            </h2>
            <p className='text-center font-redhat'>
              If you want to organize a side event, we are happy to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
