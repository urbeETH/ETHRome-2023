import { Icon } from '@iconify/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-between w-full px-16 py-4 space-y-2 bg-black md:flex-row'>
      <StaticImage
        src='../images/logo_footer.png'
        alt='logo footer'
        className='w-[112px] h-[40px]'
      />
      <p className='text-sm text-white'>Hacking history, shaping the future.</p>
      <div className='flex items-center space-x-2'>
        <Icon
          onClick={() => window.open('https://twitter.com/ethereumrome', '_blank')}
          icon='mdi:twitter'
          className='text-2xl text-white cursor-pointer'
        />
        <Icon
          href='mailto:sponsor@ethrome.org'
          icon='material-symbols:mail-rounded'
          className='text-2xl text-white cursor-pointer'
        />
      </div>
    </div>
  )
}
