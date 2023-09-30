const sideEventsList = [
  {
    bg: 'side-events_web3privacy.png',
    link: 'https://lu.ma/web3privacynow_rome',
    event: 'web3privacy • Rome’s Takeover',
    description: 'Global privacy advocates converge to mainstream privacy in Web3',
    calendar: 'tdesign_calendar.svg',
    data: 'Thu, Oct 5th',
    location: 'tdesign_location.svg',
    place: 'Villaggio Globale',
    eventLocation: 'https://www.google.com/maps/place/Villaggio+Globale/@41.8741306,12.4719822,15z/data=!4m6!3m5!1s0x132f60300ef3b2b3:0xefe2660fd385fd0f!8m2!3d41.8741306!4d12.4719822!16s%2Fg%2F11fnwh3zv1?entry=ttu'
  },
  {
    bg: 'side-events_urbetalks.png',
    link: 'https://lu.ma/m15ap2ov',
    event: 'urbe.eth • UrbeTalks ETHRome',
    description: 'Urbe.eth monthly meetup hosting 4 speakers delving into various topics',
    calendar: 'tdesign_calendar.svg',
    data: 'Sat, Oct 7th',
    location: 'tdesign_location.svg',
    place: 'CAE',
    eventLocation: 'https://www.google.com/maps/place/Villaggio+Globale/@41.8741306,12.4719822,15z/data=!4m6!3m5!1s0x132f60300ef3b2b3:0xefe2660fd385fd0f!8m2!3d41.8741306!4d12.4719822!16s%2Fg%2F11fnwh3zv1?entry=ttu'
  },
  {
    bg: 'side-events_brian.png',
    link: 'https://lu.ma/0oiv319s',
    event: 'Brian • UrbeTalks ETHRome',
    description: 'Brian.ai leads a conference on AI and web3 intersections',
    calendar: 'tdesign_calendar.svg',
    data: 'Sat, Oct 7th',
    location: 'tdesign_location.svg',
    place: 'CAE',
    eventLocation: 'https://www.google.com/maps/place/Villaggio+Globale/@41.8741306,12.4719822,15z/data=!4m6!3m5!1s0x132f60300ef3b2b3:0xefe2660fd385fd0f!8m2!3d41.8741306!4d12.4719822!16s%2Fg%2F11fnwh3zv1?entry=ttu'
  },
  {
    bg: 'cryptocanal.jpg',
    link: 'https://lu.ma/privacysoiree',
    event: 'Privacy Soiree • ETHRome ',
    description: '​Railgun, Waku, and CryptoCanal invite you to a secret meetup!',
    calendar: 'tdesign_calendar.svg',
    data: 'Fri, Oct 6th',
    location: 'tdesign_location.svg',
    place: 'Campo de\' Fiori',
    eventLocation: 'https://www.google.com/maps/place/Campo+de\'+Fiori/@41.8955937,12.470945,18.08z/data=!4m6!3m5!1s0x132f6055a903cf7d:0x1808fc7ca708f2c4!8m2!3d41.8957466!4d12.4718497!16zL20vMDdjMHF5?entry=ttu'
  },
  {
    bg: 'side-events_polkadot.avif',
    link: 'https://lu.ma/p3v87fab',
    event: 'Polkadot Brunch • ETHRome ',
    description: 'Ready to dive into the world of governance on chain technology?',
    calendar: 'tdesign_calendar.svg',
    data: 'Fri, Oct 6th',
    location: 'tdesign_location.svg',
    place: 'CAE',
    eventLocation: 'https://www.google.com/maps/place/Villaggio+Globale/@41.8741306,12.4719822,15z/data=!4m6!3m5!1s0x132f60300ef3b2b3:0xefe2660fd385fd0f!8m2!3d41.8741306!4d12.4719822!16s%2Fg%2F11fnwh3zv1?entry=ttu'
  },
]

export default function SideEvents() {
  return (
    <div className='h-auto py-24 relative bg-[#EFEBE6]' id='sideEvents'>
      <div className='flex flex-col items-center justify-center h-full '>
        <div className='flex flex-col items-center justify-center'>
          <div className=' w-4/5 md:w-2/4 text-rome-red text-center font-redhat '>
            <h1 className='text-7xl text-center font-bold'>Side Events</h1>
            <p className='py-8 text-black'>
              Side events offer a dynamic platform for participants, communities, and sponsors to
              derive additional value and engagement beyond the core hackathon experience. These
              events serve as catalysts for networking, learning, and fostering collaboration.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-[20px] px-4'>
          {/* <div className='flex flex-col items-center space-y-8 space-x-0 md:space-x-[20px] mt-8 px-16 md:flex-row md:items-start justify-evenly md:space-y-0'> */}
          {sideEventsList.map(
            ({ bg, link, event, description, data, place, calendar, location, eventLocation}) => (
              <div
                className='flex flex-col items-center space-y-4 max-w-[260px] h-full'
                key={event}
              >
                <a href={`${link}`} target='_blank'>
                  <div className='flex justify-center items-center w-full max-w-[320px] h-52'>
                    <img
                      className='md:hover:scale-105 transition-transform duration-700 min-h-[189px] w-full rounded-xl object-cover'
                      src={`./sideEvents/${bg}`}
                      alt=''
                    />
                  </div>
                </a>
                <div className='flex flex-col justify-start '>
                  <h2 className='text-[16px] text-rome-red text-left font-bold'>{event}</h2>
                  <p className='text-left font-redhat text-[16px]'>{description}</p>
                  <div className='relative w-full flex flex-col md:flex-row space-x-0 pt-2 md:space-x-[12px] mt-auto'>
                    <div className='flex justify-start mb-2 md:mb-0 space-x-[6px]'>
                      <img src={`./sideEvents/${calendar}`} alt='' className='w-[20px] h-[20px]' />
                      <h2 className='side_events_data text-sm text-[#13080E] text-opacity-[0.64] text-center font-semibold'>
                        {data}
                      </h2>
                    </div>
                    <a
                      href={eventLocation}
                      target='_blank'
                    >
                      <div className='flex justify-start space-x-[6px]'>
                        <img
                          src={`./sideEvents/${location}`}
                          alt=''
                          className='w-[20px] h-[20px]'
                        />
                        <h2 className='side_events_place text-sm text-[#13080E] text-opacity-[0.64] text-center font-semibold'>
                          {place}
                        </h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
