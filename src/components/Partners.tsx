export default function Partners() {
    return (
        <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
            <h4 className='uppercase opacity-60 text-black font-semibold'>Partners</h4>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-32'>
                <a href='https://openq.dev/' target='_blank' rel='noreferrer'><img src='/partners/logo-openq.png'
                                                                                   className='h-20 md:h-32'/></a>
                <a href='https://ethdam.com/' target='_blank' rel='noreferrer'><img src='/partners/logo-ethdam.png'
                                                                                   className='h-20 md:h-32'/></a>
                <a href='https://www.spaghett-eth.com/' target='_blank' rel='noreferrer'><img src='/partners/logo-spaghetteth.png'
                                                                                   className='h-20 md:h-32'/></a>
                <a href='https://web3privacy.info/' target='_blank' rel='noreferrer'><img
                    src='/partners/logo-web3_privacy_now.png' className='h-20 md:h-32'/></a>
                <a href='https://www.basedinlisbon.xyz/' target='_blank' rel='noreferrer'><img
                    src='/partners/logo-based_in_lisbon.png' className='h-20 md:h-32'/></a>
                <a href='https://www.ledger.com/' target='_blank' rel='noreferrer'><img src='/partners/logo-ledger.png'
                                                                                   className='h-20 md:h-32'/></a>
                <a href='https://yomi.digital/#/' target='_blank' rel='noreferrer'><img src='/partners/logo-yomi.png'
                                                                                   className='h-20 md:h-32'/></a>
                <a href='https://talentgarden.org/en/' target='_blank' rel='noreferrer'><img src='/partners/logo-tag.png'
                                                                                   className='h-20 md:h-32'/></a>
            </div>
        </div>
    )
}
