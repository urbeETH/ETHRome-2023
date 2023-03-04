import { useEffect, useState } from 'react'

export default function useTheme(): [string, React.Dispatch<string>] {
  const [theme, setTheme] = useState(localStorage.ethromeTheme)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem('ethromeTheme', theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}
