import React from 'react'
import cn from 'classnames'
import styles from '../text.module.css'

function TextButton({
  children,
  className,
  small,
  ...props
}: {
  children: React.ReactNode
  className?: string | null
  small?: boolean
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
