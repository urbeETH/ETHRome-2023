import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div className='w-full bg-black flex flex-col md:flex-row items-center space-y-2 justify-between px-16 py-4'>
      <img src='/logo_footer.png' className='h-10' />
      <p className='text-white text-sm'>Hacking history, shaping the future.</p>
      <div className='flex items-center space-x-2'>
        <Icon
          onClick={() => window.open('https://twitter.com/ethereumrome', '_blank')}
          icon='mdi:twitter'
          className='text-2xl cursor-pointer text-white'
        />
        <Icon
          href='mailto:sponsor@ethrome.org'
          icon='material-symbols:mail-rounded'
          className='text-2xl cursor-pointer text-white'
        />
      </div>
    </div>
  )
}
