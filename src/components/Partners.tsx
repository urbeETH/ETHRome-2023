import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Partners() {
  return (
    <div className='py-16 md:py-24 bg-[#EFEBE6] flex flex-col items-center justify-center'>
      <h4 className='font-semibold text-black uppercase opacity-60'>Partners</h4>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-32'>
        <StaticImage
          src='../images/partners/logo-openq.png'
          alt='logo openq'
          width={212}
          height={128}
        />
        <StaticImage
          src='../images/partners/logo-ethdam.png'
          alt='logo ethdam'
          width={212}
          height={128}
        />
        <StaticImage
          src='../images/partners/logo-spaghetteth.png'
          alt='logo spaghetteth'
          width={212}
          height={128}
        />
        <StaticImage
          src='../images/partners/logo-ledger.png'
          alt='logo ledger'
          width={212}
          height={128}
        />
        <StaticImage
          src='../images/partners/logo-yomi.png'
          alt='logo yomi'
          width={212}
          height={128}
        />
        <StaticImage
          src='../images/partners/logo-tag.png'
          alt='logo tag'
          width={212}
          height={128}
        />
      </div>
    </div>
  )
}
