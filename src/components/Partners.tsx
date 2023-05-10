import ImageLink from './ImageLink';
export default function Partners() {
    return (
        <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
            <h4 className='uppercase opacity-60 text-black font-semibold'>Partners</h4>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-32'>
                <ImageLink imagePath="/partners/logo-ledger.png" url="https://www.ledger.com/" alt="logo-ledger"/>
                <a href='https://web3privacy.info/' target='_blank' rel='noreferrer'><img
                    src='/partners/logo-web3privacy.png' className='h-20 md:h-32'/></a>
                <ImageLink imagePath="/partners/logo-openq.png" url="https://openq.dev/" alt="logo-openq"/>
                <ImageLink imagePath="/partners/logo-rekt.png" url="https://rekt.news/" alt="logo-rekt"/>
                <ImageLink imagePath="/partners/logo-ethdam.png" url="https://ethdam.com/" alt="logo-ethdam"/>
                <ImageLink imagePath="/partners/logo-ethbrno.png" url="https://ethbrno.cz/" alt="logo-ethbrno"/>
                <ImageLink imagePath="/partners/logo-bankless.png" url="https://www.bankless.community/" alt="logo-bankless"/>
                <ImageLink imagePath="/partners/logo-lunardao.png" url="https://lunardao.net/" alt="logo-lunardao"/>
                <ImageLink imagePath="/partners/logo-yomi.png" url="https://yomi.digital/#/" alt="logo-yomi"/>
                <ImageLink imagePath="/partners/logo-spaghetteth.png" url="https://www.spaghett-eth.com/" alt="logo-spaghettet"/>
                <ImageLink imagePath="/partners/logo-tag.png" url="https://talentgarden.org/" alt="logo-tag"/>
                <ImageLink imagePath="/partners/logo-based_in_lisbon.png" url="https://www.basedinlisbon.xyz/" alt="logo-based-in-lisbon"/>
            </div>
        </div>
    )
}
