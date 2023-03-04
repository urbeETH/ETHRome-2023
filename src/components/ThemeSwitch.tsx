import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useTheme from '../hooks/useTheme'

export default function ThemeSwitch() {
  const [colorTheme, setTheme] = useTheme()
  const [isLight, setIsLight] = useState<boolean>(colorTheme === 'light')

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setIsLight(checked)
  }

  return <DarkModeSwitch checked={isLight} onChange={toggleDarkMode} size={24} />
}
