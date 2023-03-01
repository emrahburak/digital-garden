import React from 'react'
import cn from 'classnames'

import styles from '../text.module.css'

function TextTag({
  children,
  className,
  small = null,
  ...props
}: {
  children: React.ReactNode
  className: string | null
  small: Boolean | null
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
