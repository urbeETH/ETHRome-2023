import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-between w-full gap-4 px-16 py-8 space-y-2 bg-black md:flex-row sm:gap-0'>
      <img src='/logo_footer.png' className='h-20' />
      <p className='text-2xl text-center text-white'>Hacking history, shaping the future.</p>

      <div className='flex items-center gap-8'>
        <Icon
          onClick={() => window.open('https://twitter.com/ethereumrome', '_blank')}
          icon='mdi:twitter'
          className='text-4xl text-white cursor-pointer'
        />
        <Icon
          href='mailto:sponsor@ethrome.org'
          icon='material-symbols:mail-rounded'
          className='text-4xl text-white cursor-pointer'
        />
      </div>
    </div>
  )
}
