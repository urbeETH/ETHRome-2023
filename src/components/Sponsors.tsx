import { Image } from './ImageLink'
export default function Sponsors() {
  return (
    <div className='pt-16 md:pt-24 bg-[#EFEBE6]  flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-rome-purple uppercase opacity-60'>Sponsors</h4>

      <div className='w-full px-8 pt-4 pb-0 flex flex-col justify-center md:pt-16 mb:pb-8 md:flex-row md:justify-evenly'>
        <Image
          imagePath='/sponsors/logo-waku.svg'
          url='https://waku.org/'
          alt='Logo Waku'
          className='h-auto mt-4 md:h-56 md:mt-0'
        />
      </div>
      {/* patricians */}
      <div className='w-full px-8 py-4 flex flex-col justify-center md:py-8 md:flex-row md:justify-center items-center md:space-x-[32px]'>
        <Image
          imagePath='/sponsors/logo-gnosis.svg'
          url='https://www.gnosis.io/'
          alt='Logo Gnosis Chain'
          className='h-28 mt-4 md:h-36 md:mt-0'
        />
        <Image
          imagePath='/sponsors/logo-ens.svg'
          url='https://ens.domains/'
          alt='Logo ENS'
          className='h-28 md:h-36'
        />
           <Image
          imagePath='/sponsors/logo-railgun.svg'
          url='https://www.railgun.org/'
          alt='Logo Railgun'
          className='h-28 md:h-36'
        />
      </div>
      <div className='w-full mt-8 grid gap-4 grid-cols-2 grid-rows-3 md:flex md:justify-center md:space-x-[24px]'>
        <Image
          imagePath='/sponsors/logo-esp.svg'
          url='https://esp.ethereum.foundation/'
          alt='Logo EF ESP'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-sismo.svg'
          url='https://www.sismo.io/'
          alt='Logo Sismo'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-requestnetwork.svg'
          url='https://request.network/en/'
          alt='Logo Request Network'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-base.svg'
          url='https://base.org'
          alt='Logo Base'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-interface.svg'
          url='https://interface.social/'
          alt='Logo Interface'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-pse.svg'
          url='https://pse.dev/'
          alt='Logo PSE'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-thegraph.svg'
          url='https://thegraph.com/'
          alt='Logo The Graph'
          className='h-16 md:h-24'
        />
        <Image
          imagePath='/sponsors/logo-secret_network.svg'
          url='https://scrt.network/'
          alt='Logo Secret Network'
          className='h-16 md:h-24'
        />
      </div>
    </div>
  )
}
