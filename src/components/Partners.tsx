import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Partners() {
  return (
    <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-black uppercase opacity-60'>Partners</h4>
      <div className='grid grid-cols-2 mx-12 md:mx-72 md:grid-cols-3 gap-x-8 md:gap-x-32'>
        <StaticImage
          src='../images/partners/logo-openq.png'
          alt='logo openq'
          width={220}
          height={132}
        />
        <StaticImage
          src='../images/partners/logo-ethdam.png'
          alt='logo ethdam'
          width={220}
          height={132}
        />
        <StaticImage
          src='../images/partners/logo-spaghetteth.png'
          alt='logo spaghetteth'
          width={220}
          height={132}
        />
        <StaticImage
          src='../images/partners/logo-ledger.png'
          alt='logo ledger'
          width={220}
          height={132}
        />
        <StaticImage
          src='../images/partners/logo-yomi.png'
          alt='logo yomi'
          width={220}
          height={132}
        />
        <StaticImage
          src='../images/partners/logo-tag.png'
          alt='logo tag'
          width={220}
          height={132}
        />
      </div>
    </div>
  )
}
