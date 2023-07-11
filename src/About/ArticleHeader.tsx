import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function ArticleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerBackground, setHeaderBackground] = useState('bg-[#EFEBE6]')

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    toggleMenu()
  }

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      setHeaderBackground('bg-[#FFFFFF] rounded-b-xl shadow-lg')
    } else {
      setIsMenuOpen(false)
      if (window.scrollY < 60) setHeaderBackground('bg-[#EFEBE6]')
    }
  }

  const changeHeaderBackground = () => {
    if (window.scrollY > 100) {
      setHeaderBackground('bg-[#FFFFFF] rounded-b-xl shadow-lg')
    } else {
      setHeaderBackground('bg-[#EFEBE6]')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderBackground)

    return () => {
      window.removeEventListener('scroll', changeHeaderBackground)
    }
  }, [])

  return (
    <>
      <div
        className={`hidden md:flex items-center justify-center px-16 py-4 fixed w-full z-50 ${headerBackground}`}
      >
        <Link to='/'><img src='/ethrome_logo.png' className='w-40' /></Link>
      </div>
      <div
        className={`flex flex-col md:hidden px-4 py-4 fixed w-full ${headerBackground} transition-colors z-50`}
      >
        <div className={'flex items-center justify-center'}>
        <Link to='/'><img src='/ethrome_logo.png' className='w-40' /></Link>
        </div>
      </div>
    </>
  )
}
