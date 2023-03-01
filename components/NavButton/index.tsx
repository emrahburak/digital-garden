import React from 'react'
import cn from 'classnames'
import Button from '../Button'
import styles from './navButton.module.css'

interface Prop {
  selected?: boolean
  dark: boolean
  href?: string
  children: React.ReactNode
  className?: string | undefined
  [x: string]: any
}

const NavButton: React.FC<Prop> = ({
  href = '/',
  dark = false,
  selected = false,
  children,
  className,
  ...props
}) => {
  return (
    <>
      <Button
        className={cn(
          styles.navButton,
          !dark ? styles.navButtonPrimary : styles.navButtonDarkMode,
          selected && styles.navButtonAllModeSelected,
          className
        )}
        href={href}
        {...props}
      >
        {children}
      </Button>
    </>
  )
}

export default NavButton
