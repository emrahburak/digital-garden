import React from 'react'
import * as Text from '../../Text'
import Button from '../../Button'
import { Read as IconRead } from '../../Icon'

import styles from './blogCard.module.css';
import Picture from '../../Picture'

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const BlogCard: React.FC<Prop> = ({
  children,
  title,
  path,
  date,
  tags,
  size = { width: 304, height: 336 },
  ...props
}) => {
  return (
    <>
      <div className={styles.container} {...props}>
        <Picture className={styles.image} src={path} size={size} alt={title} />

        <div className={styles.body}>
          <div className={styles.header}>
            <Text.TextTitle>{title}</Text.TextTitle>
            <Text.TextDate>{date}</Text.TextDate>
          </div>
          <Text.TextBody className={styles.article}>
            {children}
          </Text.TextBody>
          <div className={styles.footer}>
            <ul>
              {tags.map((tag, pos) => (
                <Text.TextTag key={pos}> {tag}</Text.TextTag>
              ))}
            </ul>
            <Button href={'/'}>
              <IconRead />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
