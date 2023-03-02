import React from 'react'
import Image from 'next/image'
import BlogCardImage from '../Picture/BlogCardImage'
import cn from 'classnames'
import TextTitle from '../Text/TextTitle'
import TextTag from '../Text/TextTag'
import TextDate from '../Text/TextDate'
import NavButton from '../NavButton'
import TextBody from '../Text/TextBody'
import styles from './card.module.css'

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  icon: React.ReactNode
  children: React.ReactNode
  [x: string]: any
}

const BlogCard: React.FC<Prop> = ({
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
      <div className={styles.blogCard} {...props}>
        <div className={styles.blogCardImage}>
          <BlogCardImage src={path} alt={title} />
        </div>
        <div className={styles.blogCardSection}>
          <div className={styles.blogCardHeader}>
            <TextTitle>{title}</TextTitle>
            <TextDate small={false}>{date}</TextDate>
          </div>
          <TextBody className={styles.blogCardBody}>{children}</TextBody>
          <div className={styles.blogCardFooter}>
            <ul>
              {tags.map((tag, pos) => (
                <li key={pos}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

const Card: React.FC<Prop> = ({ ...props }) => {
  const Component = BlogCard
  return (
    <>
      <Component {...props}>{props.children}</Component>
    </>
  )
}

export default Card
