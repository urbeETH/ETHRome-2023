export default function SideEvents() {
  return (
    <div className='h-auto py-24 relative bg-[#EFEBE6]' id='sideEvents'>
      <div className='flex flex-col items-center justify-center h-full '>
        <div className='flex flex-col items-center justify-center'>
          <div className=' w-4/5 md:w-2/4 text-rome-red text-center font-redhat '>
            <h1 className='text-7xl text-rome-red text-center font-bold'>Side Events</h1>
            <p className='py-8'>
              Side events offer a dynamic platform for participants, communities, and sponsors to
              derive additional value and engagement beyond the core hackathon experience. These
              events serve as catalysts for networking, learning, and fostering collaboration.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center w-4/5 space-y-8 md:flex-row md:items-start justify-evenly md:space-y-0'>
          <div className='flex flex-col items-center p-4 space-y-4'>
            <a href='https://www.youtube.com/channel/UC15_amrqg-rAKHlH8eYGD2Q' target='_blank'>
              <div className='flex justify-center items-center w-full h-52 '>
                <img
                  className='md:hover:scale-110 transition-all duration-700'
                  src='/side-events_urbetalks.png'
                  alt=''
                />
              </div>
            </a>
            <h2 className='text-3xl text-rome-red text-center font-bold'>Urbe Talks #12</h2>
            <a
              href='https://www.google.com/maps/place/Talent+Garden/@41.8677736,12.4791516,15z/data=!4m6!3m5!1s0x13258ba9447f0e9b:0x90bad870b8cb289e!8m2!3d41.8677736!4d12.4791516!16s%2Fg%2F11h12sbnbn?entry=ttu'
              target='_blank'
            >
              <div className='relative flex flex-col md:flex-row items-center justify-center underline_item'>
                <h2 className='text-2xl text-rome-red text-center font-bold'>Wed 4th Oct,</h2>
                <h2 className='text-2xl text-rome-red text-center font-bold md:pl-1'>
                  Talent Garden Ostiense
                </h2>
              </div>
            </a>
            <p className='text-center font-redhat'>
              Urbe.eth monthly meetup hosting 4 speakers delving into various topics
            </p>
          </div>
          <div className='flex flex-col items-center p-4 space-y-4'>
            <a href='https://prague.web3privacy.info/' target='_blank'>
              <div className='flex justify-center items-center w-full h-52 '>
                <img
                  className='md:hover:scale-110 transition-all duration-700'
                  src='/side-events_web3privacy.png'
                  alt=''
                />
              </div>
            </a>
            <h2 className='text-3xl text-rome-red font-bold text-center'>
              Web3 Privacy Now Meetup
            </h2>
            <a
              href='https://www.google.com/maps/place/Villaggio+Globale/@41.8741306,12.4719822,15z/data=!4m6!3m5!1s0x132f60300ef3b2b3:0xefe2660fd385fd0f!8m2!3d41.8741306!4d12.4719822!16s%2Fg%2F11fnwh3zv1?entry=ttu'
              target='_blank'
            >
              <div className='relative flex flex-col md:flex-row items-center justify-center underline_item'>
                <h2 className='text-2xl text-rome-red text-center font-bold'>Thu 5th Oct,</h2>
                <h2 className='text-2xl text-rome-red text-center font-bold md:pl-1'>
                  Villaggio Globale
                </h2>
              </div>
            </a>
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
