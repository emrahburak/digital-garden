import React from 'react'
import cn from 'classnames';
import styles from './portfolioCard.module.css';

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const PortfolioCard: React.FC<Prop> = ({
  children,
  title,
  date,
  tags,
  ...props
}) =>
   (
    <>
      <div className={cn(styles.smallCard,props.className)}>
         PortfolioCard
        {children}
      </div>
    </>
  )


export default PortfolioCard;