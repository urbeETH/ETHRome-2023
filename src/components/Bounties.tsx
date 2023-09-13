import CoinsBounties from './animations/CoinsBounties'

/** Bounties List */

const bountiesList = [
  { logo: 'ETHRome-LP-Bounties-logoWaku.svg', link: 'https://waku.org/', dollaro: '$', amount: '4', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoENS.svg', link: 'https://app.ens.domains/', dollaro: '$', amount: '5', mila: 'K' },
  {
    logo: 'ETHRome-LP-Bounties-logoGnosisChain.svg',
    link: 'https://www.gnosis.io/',
    dollaro: '$',
    amount: '5',
    mila: 'K',
  },
  { logo: 'ETHRome-LP-Bounties-logoSismo.svg', link: 'https://www.sismo.io/', dollaro: '$', amount: '4', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoPSE.svg', link: 'https://pse.dev/', dollaro: '$', amount: '3', mila: 'K' },
  {
    logo: 'ETHRome-LP-Bounties-logoBuidlGuidl.svg',
    link: 'https://buidlguidl.com/',
    dollaro: '$',
    amount: '5',
    mila: 'K',
  },
  { logo: 'ETHRome-LP-Bounties-logoHopr.svg', link: 'https://hoprnet.org/', dollaro: '$', amount: '3', mila: 'K' },
  {
    logo: 'ETHRome-LP-Bounties-logoTalentProtocol.svg',
    link: 'https://www.talentprotocol.com/',
    dollaro: '$',
    amount: '2.5',
    mila: 'K',
  },
  {
    logo: 'ETHRome-LP-Bounties-logoTalentLayer.svg',
    link: 'https://www.talentlayer.org/',
    dollaro: '$',
    amount: '2.5',
    mila: 'K',
  },
  { logo: 'ETHRome-LP-Bounties-logoKeyko.svg', link: 'https://www.keyko.io/', dollaro: '$', amount: '2', mila: 'K' },
  {
    logo: 'ETHRome-LP-Bounties-logoInterface.svg',
    link: 'https://www.interface.social/',
    dollaro: '$',
    amount: '1.5',
    mila: 'K',
  },
  {
    logo: 'ETHRome-LP-Bounties-logoDataverseOS.svg',
    link: 'https://dataverse-os.com/',
    dollaro: '$',
    amount: '1',
    mila: 'K',
  },
  {
    logo: 'ETHRome-LP-Bounties-logoSpaghettETH.svg',
    link: 'https://www.spaghett-eth.com/',
    dollaro: '$',
    amount: '1',
    mila: 'K',
  },
  { logo: 'ETHRome-LP-Bounties-logoBrian.svg', link: 'https://www.brianknows.org/', dollaro: '$', amount: '1', mila: 'K' },
  {
    logo: 'b7fe7200-ba3d-11ec-bd24-ab5b0b73876cSpethLogo 3.svg',
    link: '',
    dollaro: '$',
    amount: '1',
    mila: 'K',
  },
  { logo: 'ETHRome-LP-Bounties-logoUrbe.svg', link: 'https://twitter.com/urbeEth', dollaro: '$', amount: '1', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoBase.svg', link: 'https://base.org/', amount: '', mila: '', tbd: 'tbd' },
  { logo: 'ETHRome-LP-Bounties-logoSecretNetwork.svg', link: 'https://scrt.network/', amount: '', mila: '', tbd: 'tbd' },
]

export default function Bounties() {
  return (
    <div className='w-full bg-[#13080E] relative px-0 pt-36 pb-72 md:pb-16 ' id='bounties'>
      <img src='/floating_coins.png' className='absolute hidden xl:block -top-8 left-72' />
      <img src='/floating_coins.png' className='absolute block md:hidden -top-12 left-8' />

      <div className='flex flex-col items-center px-8 my-auto justify-evenly md:w-screen md:px-0 xl:px-48'>
        <div className='w-full flex flex-col justify-evenly items-center md:text-left xl:flex-row'>
          <div className='relative z-20'>
            <h1 className='text-7xl font-bold text-[#FABB00]'>Bounties</h1>
            <img
              src='/splash_yellow_2.png'
              className='absolute translate-y-1/2 bottom-1/2 xl:-translate-x-1/2'
            />
          </div>
          <h2 className='z-20 mt-8 max-w-xl text-xl font-light text-white bg-[#13080E] font-redhat xl:mt-0'>
            <span className='font-bold text-[#FABB00]'>Spice up your project</span> and win big with
            sponsorship bounties! Experiment with new technologies and meet specific requirements to{' '}
            <span className='font-bold text-[#FABB00]'>earn thrilling rewards.</span>
          </h2>
        </div>

        <div
          id='bounties_grid'
          className='mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-4 justify-center'
        >
          {bountiesList.map(({ logo, link, dollaro, amount, mila, tbd }) => (
            <>
              <a href={`${link}`} target='_blank'>
                <div
                  id='bounties_cell'
                  className='relative w-full max-w-[168px] h-[123px] p-4 flex flex-col space-y-[6px] items-center justify-around text-2xl px-[36px] pt-[20px] pb-[12px] bg-[#FABB0047] bg-opacity-[0.64] rounded-xl'
                >
                  <img src={`./bounties/${logo}`} alt='' />

                  <div className='flex justify-evenly items-center'>
                    <span className='text-white '>{dollaro}</span>
                    <h2 className='text-rome-yellow text-4xl px-2 font-black'>
                      {amount} <span className='text-white font-medium opacity-[0.64]'>{tbd}</span>
                    </h2>
                    <span className='text-white'>{mila}</span>
                  </div>
                  {/* <div className='absolute top-0 left-0 h-full w-full'> */}
                  <img
                    src='/bounties/bg_bounties.png'
                    alt=''
                    className='opacity-30 mix-blend-overlay object-cover absolute h-full -top-2'
                  />
                  {/* </div> */}
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
      <CoinsBounties />
      <img
        src='/coins_right_mobile.svg'
        className='absolute z-0 block -translate-x-1/2 -bottom-4 left-1/2 right-1/2 md:hidden'
      />
    </div>
  )
}
