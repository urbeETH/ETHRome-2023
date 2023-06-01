import ImageLink from './ImageLink'
export default function Partners() {
  return (
    <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-black uppercase opacity-60'>Partners</h4>
      <div className='grid grid-cols-2 py-16 md:grid-cols-4 gap-x-6 md:gap-x-16 max-w-4xl'>
        <ImageLink
          imagePath='/partners/logo-aragon.png'
          url='https://research.aragon.org/'
          alt='Logo Aragon Research'
        />
        <ImageLink
          imagePath='/partners/logo-web3privacy.png'
          url='https://prague.web3privacy.info/'
          alt='Logo Web3 Privacy'
        />
        <ImageLink imagePath='/partners/logo-openq.png' url='https://openq.dev/' alt='Logo OpenQ' />
        <ImageLink imagePath='/partners/logo-rekt.png' url='https://rekt.news/' alt='Logo Rekt' />
        <ImageLink
          imagePath='/partners/logo-ethdam.png'
          url='https://ethdam.com/'
          alt='Logo ETHdam'
        />
        <ImageLink
          imagePath='/partners/logo-ethbrno.png'
          url='https://ethbrno.cz/'
          alt='Logo ethBRNo'
        />
        <ImageLink
          imagePath='/partners/logo-bankless.png'
          url='https://www.bankless.community/'
          alt='Logo Bankless'
        />
        <ImageLink
          imagePath='/partners/logo-ledger.png'
          url='https://www.ledger.com/'
          alt='Logo Ledger'
        />
        <ImageLink
          imagePath='/partners/logo-lunardao.png'
          url='https://lunardao.net/'
          alt='Logo LunarDAO'
        />
        <ImageLink
          imagePath='/partners/logo-yomi.png'
          url='https://yomi.digital/#/'
          alt='Logo Yomi'
        />
        <ImageLink
          imagePath='/partners/logo-spaghetteth.png'
          url='https://www.spaghett-eth.com/'
          alt='Logo SpaghEtTH'
        />
        <ImageLink
          imagePath='/partners/logo-codemotion.png'
          url='https://www.codemotion.com/'
          alt='Logo Codemotion'
        />
        <ImageLink
          imagePath='/partners/logo-tag.png'
          url='https://talentgarden.org/'
          alt='Logo Talent Garden'
        />
        <ImageLink
          imagePath='/partners/logo-based_in_lisbon.png'
          url='https://www.basedinlisbon.xyz/'
          alt='Logo Based in Lisbon'
        />
        <ImageLink
          imagePath='/partners/logo-swarm.svg'
          url='https://www.ethswarm.org/'
          alt='Logo EthSwarn'
        />
      </div>
    </div>
  )
}
