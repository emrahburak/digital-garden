import React from 'react'
import BlogCardImage from '../Picture/BlogCardImage'
import cn from 'classnames'
import TextTitle from '../Text/TextTitle'
import TextTag from '../Text/TextTag'
import TextDate from '../Text/TextDate'
import { Read } from '../Icon'
import Button from '../Button'
import TextBody from '../Text/TextBody'

import CardBody from './CardBody'
import styles from './card.module.css'

interface Prop {
  type: string
  title: string
  path: string
  date: string
  tags: string[]
  icon: React.ReactNode
  children: React.ReactNode
  [x: string]: any
}

const BigCardWithImage: React.FC<Prop> = ({
  children,
  title,
  path,
  date,
  tags,
  icon,
  ...props
}) => {
  return (
    <>
      <div className={styles.bigCard} {...props}>
        <BlogCardImage src={path} alt={title} />
        <CardBody tags={tags} {...props}>{children}</CardBody>
      </div>
    </>
  )
}

const SmallCardWithImage = ({
  children,
  ...props
}: {
  children: React.ReactNode
}) => {
  return <>Small</>
}

const Card: React.FC<Prop> = ({ ...props }) => {
  const Component = props.type === 'big' ? BigCardWithImage : SmallCardWithImage
  return (
    <>
      <Component {...props}>{props.children}</Component>
    </>
  )
}

export default Card
