import { Icon } from '@iconify/react'

export default function FloatingIcons() {
  return (
    <div className='fixed hidden bg-white rounded-full md:flex flex-col space-y-1 py-2 px-1 right-8 top-20 z-40'>
      <Icon
        onClick={() => window.open('https://twitter.com/ethereumrome', '_blank')}
        icon='mdi:twitter'
        className='text-2xl cursor-pointer'
      />
      <Icon
        // onClick={() => window.open('https://t.me/+oi-scJp6dhk4ODQ0', '_blank')}
        icon='ic:baseline-telegram'
        className='text-2xl cursor-pointer'
      />
    </div>
  )
}
