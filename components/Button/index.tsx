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
  ...props
}: {
  children: React.ReactNode
  [x: string]: any
}) {
  return (
    <>
      <Link href={props.href} {...props}>
        {children}
      </Link>
    </>
  )
}

interface Prop {
  children: React.ReactNode
  [x: string]: any
}

const Button: React.FC<Prop> = ({ children, ...props }) => {
  const Component = props.href ? ButtonWithLink : BaseButton

  return (
    <>
      <Component {...props}>{children}</Component>
    </>
  )
}

export default Button
