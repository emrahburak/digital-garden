import React from 'react'
import cn from 'classnames'
import styles from './middleCard.module.css';

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const MiddleCard: React.FC<Prop> = ({
  children,
  title,
  path,
  date,
  tags,
  ...props
}) => {
  return (
    <>
      <div className={cn(styles.middleCard,props.className)}>
        Middle Card
        {children}
      </div>
    </>
  )
}


export default MiddleCard;