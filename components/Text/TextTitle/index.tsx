import React from 'react'
import cn from 'classnames'
import styles from './../text.module.css'

function TextTitle({
  children,
  className,
  small = null,
  ...props
}: {
  children: React.ReactNode
  small?: Boolean | null
  className?: string | null
}) {
  return (
    <>
      <h2
        className={cn(
          small ? styles.relewaySemiboldS100 : styles.relewayBoldL,
          className
        )}
        {...props}
      >
        {children}
      </h2>
    </>
  )
}

export default TextTitle;
