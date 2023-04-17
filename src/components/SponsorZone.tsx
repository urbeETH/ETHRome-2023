export default function SponsorZone() {
  return (
    <div
      className='min-h-screen md:h-auto bg-[#191818] relative pt-8 md:pt-32 pb-48 xl:py-48 pl-0 md:pl-48'
      id='contact'
    >
      <div className='flex flex-col justify-center items-center md:items-start max-w-xl space-y-4 relative pb-24'>
        <img src='/sponsor_crown.svg' className='h-[160px] w-[160px]' />
        <h1 className='font-bold text-white text-5xl md:text-7xl'>Sponsor Zone</h1>
        <p className='text-white max-w-xs md:max-w-[385px] text-center md:text-left'>
          Seize the chance to gain exceptional exposure, establish valuable connections, and
          demonstrate your unwavering support for the development of the blockchain space!
        </p>
        <div
          onClick={() => window.open('/ETHROME_SPONSOR_DECK.pdf', '_blank')}
          className='w-40 hover:bg-[#5b0e8b] transition-colors bg-[#8314C7] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium cursor-pointer'
        >
          <p>Sponsor deck</p>
        </div>
        <a
          href='mailto:sponsor@ethrome.org'
          className='text-[#F8FCFC] opacity-60 underline text-md'
        >
          sponsor@ethrome.org
        </a>
      </div>
      <img src='/temple.svg' className='absolute bottom-0 right-0 h-[261px] md:h-auto' />
    </div>
  )
}