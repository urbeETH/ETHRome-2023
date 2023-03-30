import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div className='w-full absolute bottom-0 h-12 p-2 bg-black flex items-center justify-evenly'>
      <img src='/logo_footer.png' className='h-10 hidden lg:block' />
      <p className='text-white hidden lg:block'>Hacking history, shaping the future.</p>
      <div className='flex items-center space-x-1'>
        <Icon
          onClick={() => window.open('https://twitter.com/ethereumrome', '_blank')}
          icon='mdi:twitter'
          className='text-2xl cursor-pointer text-white'
        />
        <Icon
          // onClick={() => window.open('https://t.me/+oi-scJp6dhk4ODQ0', '_blank')}
          icon='ic:baseline-telegram'
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
