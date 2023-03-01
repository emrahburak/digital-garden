import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './button.module.css'

function BaseButton({ children,className, ...props }: { children: React.ReactNode,className?:string }) {
  return (
    <>
      <button className={cn(styles.baseButton,className)} type="button" {...props}>
        {children}
      </button>
    </>
  )
}

function ButtonWithLink({
  children,
  className,
  ...props
}: {
  children: React.ReactNode,
  className?:string,
  [x: string]: any,
}) {
  return (
    <>
      <Link href={props.href} className={cn(styles.buttonWithLink,className)} {...props}>
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
