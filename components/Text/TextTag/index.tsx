import React from 'react'
import cn from 'classnames'

import styles from '../text.module.css'

function TextTag({
  children,
  className,
  small = false,
  ...props
}: {
  children: React.ReactNode
  className?: string 
  small?: Boolean 
}) {
  return (
    <div
      className={cn([
        !small ? styles.relewayBoldS : styles.relewayMediumS,
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

export default TextTag
