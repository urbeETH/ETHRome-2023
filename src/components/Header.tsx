export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='hidden md:flex items-center justify-between px-16 py-2'>
      <div className='w-40' />
      <div className='flex items-center justify-center font-semibold space-x-16 text-lg'>
        <h3 className='relative cursor-pointer underline_item' onClick={() => scrollTo('intro')}>
          Intro
        </h3>
        <h3 className='relative cursor-pointer underline_item' onClick={() => scrollTo('hackathon')}>
          Hackathon
        </h3>
        <h3 className='relative cursor-pointer underline_item' onClick={() => scrollTo('rome')}>
          Rome
        </h3>
        <h3 className='relative cursor-pointer underline_item' onClick={() => scrollTo('contact')}>
          Contact Us
        </h3>
        <h3 className='relative cursor-pointer underline_item' onClick={() => scrollTo('partners')}>
          Partners
        </h3>
        <h3 className='relative cursor-pointer underline_item' onClick={() => scrollTo('faq')}>
          FAQ
        </h3>
      </div>
      <div
        // onClick={() => window.open('/SPONSOR_DECK_ETHROME.pdf', '_blank')}
        className='w-40 bg-[#8314C7] hover:bg-[#5b0e8b] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium cursor-pointer'
      >
        <p>Sponsor deck</p>
      </div>
    </div>
  )
}
