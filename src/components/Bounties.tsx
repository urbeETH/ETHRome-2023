import CoinsBounties from './animations/CoinsBounties'

/** Bounties List */

const bountiesList = [
  { logo: 'ETHRome-LP-Bounties-logoWaku.svg', amount: '', mila: '', tbd: 'tbd' },
  { logo: 'ETHRome-LP-Bounties-logoBase.svg', amount: '', mila: '', tbd: 'tbd' },
  { logo: 'ETHRome-LP-Bounties-logoSecretNetwork.svg', amount: '', mila: '', tbd: 'tbd' },
  { logo: 'ETHRome-LP-Bounties-logoENS.svg', dollaro: '$', amount: '5', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoGnosisChain.svg', dollaro: '$', amount: '5', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoSismo.svg', dollaro: '$', amount: '4', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoPSE.svg', dollaro: '$', amount: '3', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoBuidlGuidl.svg', dollaro: '', amount: '5', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoHopr.svg', dollaro: '', amount: '3', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoTalentProtocol.svg', dollaro: '', amount: '2.5', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoTalentLayer.svg', dollaro: '', amount: '2.5', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoKeyko.svg', dollaro: '$', amount: '2', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoInterface.svg', dollaro: '$', amount: '1.5', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoDataverseOS.svg', dollaro: '$', amount: '1', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoSpaghettETH.svg', dollaro: '$', amount: '1', mila: 'K' },
  { logo: 'ETHRome-LP-Bounties-logoBrian.svg', dollaro: '$', amount: '1', mila: 'K' },
  {
    logo: 'b7fe7200-ba3d-11ec-bd24-ab5b0b73876cSpethLogo 3.svg',
    dollaro: '$',
    amount: '1',
    mila: 'K',
  },
  { logo: 'ETHRome-LP-Bounties-logoUrbe.svg', dollaro: '$', amount: '1', mila: 'K' }
]

export default function Bounties() {
  return (
    <div className='w-full bg-[#191818] relative px-0 pt-36 pb-72 md:pb-16 ' id='bounties'>
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
          <h2 className='z-20 mt-8 max-w-xl text-xl font-light text-white bg-[#191818] font-redhat xl:mt-0'>
            <span className='font-bold text-[#FABB00]'>Spice up your project</span> and win big with
            sponsorship bounties! Experiment with new technologies and meet specific requirements to{' '}
            <span className='font-bold text-[#FABB00]'>earn thrilling rewards.</span>
          </h2>
        </div>

        <div id='bounties_grid' className='mt-16 px-8 flex flex-wrap gap-[20px] justify-center'>
          {bountiesList.map(({ logo, dollaro, amount, mila, tbd }) => (
            <>
              <div
                id='bounties_cell'
                className='relative w-full max-w-[253px] h-[170px] p-4 flex flex-col items-center justify-around text-2xl'
              >
                <img src={`./bounties/${logo}`} alt='' className='rounded-[12px]' />

                <div className='flex justify-evenly items-center'>
                  <span className='text-white opacity-70'>{dollaro}</span>
                  <h2 className='text-rome-yellow text-4xl px-2'>
                    {amount} <span className='text-white opacity-70'>{tbd}</span>
                  </h2>
                  <span className='text-white opacity-70'>{mila}</span>
                </div>
              </div>
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
