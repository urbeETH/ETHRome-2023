import { Image } from './ImageLink'
export default function Sponsors() {
  return (
    <div className='pt-16 md:pt-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-rome-purple uppercase opacity-60'>Sponsors</h4>
      {/* senator */}
      <div className='flex flex-col'>
        <Image
          imagePath='/sponsors/logo-gnosis.svg'
          url="https://www.gnosis.io/"
          alt='Logo Gnosis Chain'
          className='h-40 md:h-60'
        />
      </div>
      <div className='flex flex-row w-full justify-evenly'>
        <Image
          imagePath='/sponsors/logo-esp.svg'
          url='https://esp.ethereum.foundation/'
          alt='Logo EF ESP'
          className='h-16 md:h-28'
        />
        <Image
          imagePath='/sponsors/logo-sismo.svg'
          url='https://www.sismo.io/'
          alt='Logo Sismo'
          className='h-16 md:h-28'
        />
        <Image
          imagePath='/sponsors/logo-base.svg'
          url='https://base.org'
          alt='Logo Base'
          className='h-16 md:h-28'
        />
      </div>
    </div>
  )
}
