import React from 'react'
import cn from 'classnames'

import styles from '../text.module.css'

function TextDate({
  children,
  className,
  small = null,
  ...props
}: {
  children: React.ReactNode
  className?: string | null
  small: boolean | null
}) {
  return (
    <div
      className={cn([
        !small ? styles.sfProBodyRegular : styles.relewayMediumS,
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

export default TextDate
