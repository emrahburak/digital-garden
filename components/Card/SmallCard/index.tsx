import React from 'react'
import cn from 'classnames';
import styles from './smallCard.module.css';

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const SmallCard: React.FC<Prop> = ({
  children,
  title,
  date,
  tags,
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


export default SmallCard;