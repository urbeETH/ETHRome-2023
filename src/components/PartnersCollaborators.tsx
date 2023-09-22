import ImageLink, { Image } from './ImageLink'
export default function PartnersCollaborats() {
  return (
    <div className='pb-16 md:pb-24 bg-[#EFEBE6] flex items-center justify-center'>
      <div className='flex flex-col justify-center items-start md:flex-row w-3xl gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <h4 className='font-semibold text-rome-red uppercase'>MEDIA PARTNERS</h4>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex justify-center items-center shrink-0 w-[180px] h-[108px] opacity-60'>
              <Image
                imagePath='/partnersCollaborators/logo-rekt.svg'
                url='https://rekt.news'
                alt='Logo Rekt'
               
              />
            </div>
            <div className='flex justify-center items-center shrink-0 w-[180px] h-[108px] opacity-60'>
              <Image
                imagePath='/partnersCollaborators/logo-banklessDAO.png'
                url='https://www.bankless.community/'
                alt='Logo BanklessDAO'
               
              />
            </div>
            <div className='flex justify-center items-center shrink-0 w-[180px] h-[108px] opacity-60'>
              <Image
                imagePath='/partnersCollaborators/logo-forweb3.svg'
                url='https://forwebthree.com/'
                alt='Logo for web3'
              
              />
            </div>
            <div className='flex justify-center items-center shrink-0 w-[180px] h-[108px] opacity-60'>
              <Image
                imagePath='/partnersCollaborators/logo-blockTides.png'
                url='https://blocktides.com/'
                alt='Logo Block Tides'
               
              />
            </div>
          </div>
        </div>

        <div className=' flex flex-col items-center justify-center gap-4 w-full md:w-auto '>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='font-semibold text-rome-red uppercase'>EVENT COLLABORATOR</h4>
            <div className='flex w-[220px] h-[132px] justify-center items-center'>
              <Image
                imagePath='/partnersCollaborators/logo-layerX.svg'
                url='https://layerx.xyz/'
                alt='Logo LayerX'
                className='h-16 md:h-24 opacity-60'
              />
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <h4 className='font-semibold text-rome-red uppercase'>
              HACKATHON COLLABORATOR
            </h4>
            <div className='flex w-[220px] h-[132px] justify-center items-center'>
              <Image
                imagePath='/partnersCollaborators/logo-dmf_io.svg'
                url='https://www.dmf.io/'
                alt='Logo DMF.io'
                className='h-16 md:h-24 opacity-60'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
