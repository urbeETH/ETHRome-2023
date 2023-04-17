import React from 'react'

import ColosseumVector from '../images/vector/colosseum_big.svg'
import Footer from './Footer'

export default function Colosseum() {
  return (
    <div className='bg-[#EFEBE6] relative' id='rome'>
      <ColosseumVector className='w-screen h-full' />
      <Footer />
    </div>
  )
}
