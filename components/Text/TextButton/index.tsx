import React from 'react'
import cn from 'classnames'
import styles from '../text.module.css'

function TextButton({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string | null
}) {
  return (
    <>
      <p className={cn([styles.relewaySemiboldS150, className])} {...props}>
        {children}
      </p>
    </>
  )
}

export default TextButton
