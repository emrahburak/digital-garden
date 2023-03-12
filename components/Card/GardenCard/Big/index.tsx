import React from 'react'
import Picture from 'components/Picture'
import * as Text from 'components/Text'
import { BigTree as IconBigTree } from 'components/Icon'
import Button from 'components/Button'
import cn from 'classnames'

import styles from './big.module.css'

interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children?: React.ReactNode
  [x: string]: any
}

const Big: React.FC<Prop> = ({
  children,
  path,
  title,
  date,
  tags,
  icon,
  size = { width: 456, height: 148 },
  ...props
}) => (
  <>
    <div className={cn(styles.container,props.className)} {...props}>
      <Picture className={styles.image} src={path} size={size} alt={title} />

      <div className={styles.body}>
        <div className={styles.header}>
          <Text.TextTitle>{title}</Text.TextTitle>
          <Text.TextDate>{date}</Text.TextDate>
        </div>
        <div className={styles.footer}>
          <ul>
            {tags.map((tag, pos) => (
              <Text.TextTag small  key={pos}> {tag}</Text.TextTag>
            ))}
          </ul>
          <Button href={'/'}>
            <IconBigTree />
          </Button>
        </div>
      </div>
    </div>
  </>
)

export default Big
