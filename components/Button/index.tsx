import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './button.module.css'

function BaseButton({ children, ...props }: { children: React.ReactNode }) {
  return (
    <>
      <button type="button" {...props}>
        {children}
      </button>
    </>
  )
}

function ButtonWithLink({
  children,
  href,
  ...props
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <>
      <Link href={href}>
        <p {...props}>{children}</p>
      </Link>
    </>
  )
}

interface Prop {
  href: string
  children:React.ReactNode,
  className?: React.ReactNode
  [x: string]: any
}

const Button: React.FC<Prop> = ({ children, className, ...props }) => {
  const Component = props.href ? ButtonWithLink : BaseButton

  return (
    <>
      <div className={cn(styles.button)}>
        <Component {...props}>{children}</Component>
      </div>
    </>
  )
}

export default Button
