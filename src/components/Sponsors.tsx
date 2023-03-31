export default function Sponsor() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6] '>
      <div className='flex flex-col items-center justify-evenly h-full' id='partners'>
        <h1 className='text-7xl text-center max-w-4xl text-[#000] font-bold'>Our Partners</h1>
        <div className='w-screen flex flex-col md:flex-row justify-center items-center mt-24'>
          <div className='w-screen md:w-3/12 flex justify-center mb-16 transition ease-in-out  hover:scale-110 duration-300'>
            <img src='/openq.png' className='md:h-48' />
          </div>
          <div className='w-screen md:w-3/12 flex justify-center mb-16 transition ease-in-out  hover:scale-110 duration-300'>
            <img src='/spaghett-eth.png' className='md:h-48' />
          </div>
          <div className='w-screen md:w-3/12 flex justify-center mb-16 transition ease-in-out  hover:scale-110 duration-300'>
            <img src='/talentgarden.png' className='md:h-48 ' />
          </div>
        </div>
        <div className='w-screen flex flex-col md:flex-row justify-center items-center mt-0'>
          <div className='w-screen md:w-3/12 flex justify-center mb-16 transition ease-in-out  hover:scale-110 duration-300'>
            <img src='/ethdam.png' className='md:h-48' />
          </div>
          <div className='w-screen md:w-3/12 flex justify-center mb-16 transition ease-in-out hover:scale-110 duration-300'>
            <img src='/ledger.png' className='md:-48' />
          </div>
          <div className='w-screen md:w-3/12 flex justify-center mb-16 transition ease-in-out hover:scale-110 duration-300'>
            <img src='/yomi.png' className='md:h-48 ' />
          </div>
        </div>
      </div>
    </div>
  )
}
