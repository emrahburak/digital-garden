import React from 'react'
import cn from 'classnames'

import styles from './tinyCard.module.css';

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const TinyCard: React.FC<Prop> = ({
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
        Middle Card
        {children}
      </div>
    </>
  )


export default TinyCard;