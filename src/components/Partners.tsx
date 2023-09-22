import { Image } from './ImageLink'
import Marquee from 'react-fast-marquee'

const sponsorList1 = [
  { altlogo: 'Ledger', imgpath: '/partners/logo-ledger.svg', url: 'https://www.ledger.com/' },
  {
    altlogo: 'Web3 Privacy',
    imgpath: '/partners/logo-web3privacy.svg',
    url: 'https://prague.web3privacy.info/',
  },
  { altlogo: 'NFT Italia', imgpath: '/partners/logo-nftItalia.png', url: '' },
  { altlogo: 'Swarm', imgpath: '/partners/logo-swarm.svg', url: 'https://www.ethswarm.org/' },
  { altlogo: 'CryptoCanal', imgpath: '/partners/logo-cryptocanal.svg', url: 'https://ethdam.com/' },
  { altlogo: 'ETHBRNo', imgpath: '/partners/logo-ethbrno.png', url: 'https://ethbrno.cz/' },
  { altlogo: 'ETHMunich', imgpath: '/partners/logo-ethmunich.svg', url: 'https://ethmunich.de/' },
  {
    altlogo: 'ETHIstanbul',
    imgpath: '/partners/logo-ethistanbul.svg',
    url: 'https://ethglobal.com/events/istanbul',
  },
  { altlogo: 'Akasha', imgpath: '/partners/logo-akasha.png', url: 'https://akasha.barcelona/en' },
  {
    altlogo: 'Buidlers Tribe',
    imgpath: '/partners/logo-buidlers-tribe.png',
    url: 'https://buidlerstribe.com/',
  },
]

const sponsorList2 = [
  {
    altlogo: 'Aragon Research',
    imgpath: '/partners/logo-aragon.png',
    url: 'https://research.aragon.org/',
  },
  { altlogo: 'LunarDAO', imgpath: '/partners/logo-lunardao.png', url: 'https://lunardao.net/' },
  { altlogo: 'Yomi', imgpath: '/partners/logo-yomi.png', url: 'https://yomi.digital/#/' },
  {
    altlogo: 'SpaghEtTH',
    imgpath: '/partners/logo-spaghetteth.png',
    url: 'https://www.spaghett-eth.com/',
  },
  {
    altlogo: 'Codemotion',
    imgpath: '/partners/logo-codemotion.svg',
    url: 'https://www.codemotion.com/',
  },
  { altlogo: 'Talent Garden', imgpath: '/partners/logo-tag.png', url: 'https://talentgarden.org/' },
  {
    altlogo: 'Based in Lisbon',
    imgpath: '/partners/logo-basedinlisbon.png',
    url: 'https://www.basedinlisbon.xyz/',
  },
  {
    altlogo: 'Kernel Community',
    imgpath: '/partners/logo-kernel-community.svg',
    url: 'https://www.kernel.community',
  },
  {
    altlogo: 'Legal Hackers',
    imgpath: '/partners/logo-legalhackers.png',
    url: 'https://www.legalhackersroma.it/',
  },
]

export default function Partners() {
  return (
    <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-rome-red uppercase '>Community Partners</h4>
      <Marquee className='pt-4 md:pt-3 opacity-60 overflow-y-hidden' pauseOnHover speed={60} direction='right'>
        {sponsorList1.map(({ altlogo, imgpath, url }) => (
          <div className='pr-8 w-[220px] h-[132px] flex justify-center items-center' key={altlogo}>
            <Image imagePath={imgpath} url={url} alt={altlogo} />
          </div>
        ))}
      </Marquee>
      <Marquee className='pt-4 md:pt-3 opacity-60' pauseOnHover speed={60} direction='right'>
        {sponsorList2.map(({ altlogo, imgpath, url }) => (
          <div className='pr-8 w-[220px] h-[132px] flex justify-center items-center' key={altlogo}>
            <Image imagePath={imgpath} url={url} alt={altlogo} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
