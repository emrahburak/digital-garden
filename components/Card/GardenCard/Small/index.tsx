import React from 'react'
import cn from 'classnames'

import styles from './small.module.css';


interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const Small: React.FC<Prop> = ({
  children,
  title,
  date,
  tags,
  icon,
  ...props
}) =>
   (
    <>
      <div className={cn(styles.smallCard,props.className)}>
        Garden Card
        {children}
      </div>
    </>
  )


export default Small