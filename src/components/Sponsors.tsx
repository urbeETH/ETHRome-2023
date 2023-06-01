import ImageLink from './ImageLink'
export default function Sponsors() {
  return (
    <div className='pt-16 md:pt-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-black uppercase opacity-60'>Sponsors</h4>
      <div className='grid grid-cols-2 py-16 md:grid-cols-4 gap-x-6 md:gap-x-16 max-w-4xl'>
        <ImageLink
          imagePath='/sponsors/logo-gnosis-chain.svg'
          url='https://www.gnosis.io/'
          alt='Logo Gnosis Chain'
        />
        <ImageLink
          imagePath='/sponsors/logo-ef-esp.svg'
          url='https://esp.ethereum.foundation/'
          alt='Logo EF ESP'
        />
        <ImageLink
          imagePath='/sponsors/logo-sismo.svg'
          url='https://www.sismo.io/'
          alt='Logo Sismo'
        />
        <ImageLink imagePath='/sponsors/logo-base.svg' url='https://base.org' alt='Logo Base' />
      </div>
    </div>
  )
}
