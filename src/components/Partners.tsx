export default function Partners() {
  return (
    <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='uppercase opacity-60 text-black font-semibold'>Partners</h4>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-32'>
        <img src='/partners/logo-openq.png' className='h-20 md:h-32' />
        <img src='/partners/logo-ethdam.png' className='h-20 md:h-32' />
        <img src='/partners/logo-spaghetteth.png' className='h-20 md:h-32' />
        <img src='/partners/logo-ledger.png' className='h-20 md:h-32' />
        <img src='/partners/logo-yomi.png' className='h-20 md:h-32' />
        <img src='/partners/logo-tag.png' className='h-20 md:h-32' />
      </div>
    </div>
  )
}
