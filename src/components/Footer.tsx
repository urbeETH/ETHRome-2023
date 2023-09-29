import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-between w-full gap-4 px-16 py-8 space-y-2 bg-[#191818] sm:gap-0'>
      <div className='flex flex-col items-center justify-between w-full gap-4 md:flex-row '>
        <img src='/logo_footer.png' className='h-20' />
        <p className='text-2xl text-center text-white'>Hacking history, shaping the future.</p>

        <div className='flex items-center gap-8 px-8'>
          <Icon
            onClick={() => window.open('https://twitter.com/ETHRome', '_blank')}
            icon='mdi:twitter'
            className='text-4xl text-white cursor-pointer'
          />
          <Icon
            onClick={() => window.open('mailto:urbe.eth@gmail.com')}
            icon='material-symbols:mail-rounded'
            className='text-4xl text-white cursor-pointer z-10'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full text-center'>
        <h4 className='text-sm text-center text-white'>
          urbe.eth • Via Bruno Bruni, 116 - 00189 Roma (RM) • CF: 96565540588
        </h4>
        <h1 className='text-sm text-center text-white pt-2'>
          <a
            href='https://ethrome.notion.site/Regulation-7d77e4d4903d47baae9a6e8f21cf4200'
            target='_blank'
          >
            REGULATION
          </a>
        </h1>
      </div>
    </div>
  )
}
