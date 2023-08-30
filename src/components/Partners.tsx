import ImageLink from './ImageLink'
import Marquee from 'react-fast-marquee'

export default function Partners() {
  return (
    <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-rome-red uppercase opacity-60'>Community Partners</h4>
      <Marquee className='px-8 pt-16 pb-8 md:py-16' pauseOnHover speed={60}>
        <ImageLink
          imagePath='/partners/logo-aragon.svg'
          url='https://research.aragon.org/'
          alt='Logo Aragon Research'
        />
        <ImageLink
          imagePath='/partners/logo-web3privacy.svg'
          url='https://prague.web3privacy.info/'
          alt='Logo Web3 Privacy'
        />
        <ImageLink imagePath='/partners/logo-openq.svg' url='https://openq.dev/' alt='Logo OpenQ' />
        <ImageLink
          imagePath='/partners/logo-ethmunich.svg'
          url='https://ethmunich.de/'
          alt='Logo ETHMunich'
        />
        <ImageLink
          imagePath='/partners/logo-akasha.svg'
          url='https://akasha.barcelona/en'
          alt='Logo Akasha'
        />
        <ImageLink imagePath='/partners/logo-rekt.svg' url='https://rekt.news/' alt='Logo Rekt' />
        <ImageLink
          imagePath='/partners/logo-ethdam.svg'
          url='https://ethdam.com/'
          alt='Logo ETHdam'
        />
        <ImageLink
          imagePath='/partners/logo-ethbrno.svg'
          url='https://ethbrno.cz/'
          alt='Logo ETHBRNo'
        />
        <ImageLink
          imagePath='/partners/logo-bankless.svg'
          url='https://www.bankless.community/'
          alt='Logo Bankless'
        />
        <ImageLink
          imagePath='/partners/logo-kernel-community.svg'
          url='https://www.kernel.community'
          alt='Logo Kernel Community'
        />
        <ImageLink
          imagePath='/partners/logo-ledger.svg'
          url='https://www.ledger.com/'
          alt='Logo Ledger'
        />
      </Marquee>
      <Marquee className='px-8 pt-8 md:py-16' pauseOnHover speed={60} direction='right'>
        <ImageLink
          imagePath='/partners/logo-lunardao.svg'
          url='https://lunardao.net/'
          alt='Logo LunarDAO'
        />
        <ImageLink
          imagePath='/partners/logo-yomi.svg'
          url='https://yomi.digital/#/'
          alt='Logo Yomi'
        />
                <ImageLink
          imagePath='/partners/logo-ethistanbul.svg'
          url='https://ethglobal.com/events/istanbul'
          alt='Logo ETHIstanbul'
        />
        <ImageLink
          imagePath='/partners/logo-buidlers-tribe.svg'
          url='https://buidlerstribe.com/'
          alt='Logo Buidlers Tribe'
        />
        <ImageLink
          imagePath='/partners/logo-forweb3.svg'
          url='https://forwebthree.com/'
          alt='Logo ForWeb3'
        />
        <ImageLink
          imagePath='/partners/logo-spaghetteth.svg'
          url='https://www.spaghett-eth.com/'
          alt='Logo SpaghEtTH'
        />
        <ImageLink
          imagePath='/partners/logo-codemotion.svg'
          url='https://www.codemotion.com/'
          alt='Logo Codemotion'
        />
        <ImageLink
          imagePath='/partners/logo-tag.svg'
          url='https://talentgarden.org/'
          alt='Logo Talent Garden'
        />
        <ImageLink
          imagePath='/partners/logo-basedinlisbon.svg'
          url='https://www.basedinlisbon.xyz/'
          alt='Logo Based in Lisbon'
        />
        <ImageLink
          imagePath='/partners/logo-swarm.svg'
          url='https://www.ethswarm.org/'
          alt='Logo EthSwarn'
        />
        <ImageLink
          imagePath='/partners/logo-legalhackers.svg'
          url='https://www.legalhackersroma.it/'
          alt='Logo Legal Hackers'
        />
      </Marquee>
    </div>
  )
}
