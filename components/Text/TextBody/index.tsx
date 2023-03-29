import React from 'react'
import cn from 'classnames'
import styles from './../text.module.css'

function TextBody({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string  
}) {
  return (
    <>
      <p className={cn([styles.libre, className])} {...props}>{children}</p>
    </>
  )
}

export default TextBody;