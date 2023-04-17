import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Contact() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]'>
      <div className='flex flex-col items-center justify-center h-full space-y-24' id='contact'>
        <div className='flex flex-col items-center space-x-0 md:flex-row md:space-x-24'>
          <StaticImage src='../images/crown.png' alt='crown' className='h-48 md:h-auto' />
          <div className='flex flex-col items-center justify-center space-y-4 text-center md:items-start md:justify-start md:text-left'>
            <h1 className='font-bold text-7xl'>Sponsor Zone</h1>
            <p>Elevate your brand and expand your network with a sponsorship at our event!</p>
            <p>
              Connect with top talent, showcase your innovative product, and take your business to
              new heights.
            </p>
            <div
              onClick={() => window.open('/ETHROME_SPONSOR_DECK.pdf', '_blank')}
              className='w-40 hover:bg-[#5b0e8b] transition-colors bg-[#8314C7] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium cursor-pointer'
            >
              <p>Sponsor deck</p>
            </div>
            <a href='mailto:sponsor@ethrome.org' className='text-[#8314C7]'>
              sponsor@ethrome.org
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
