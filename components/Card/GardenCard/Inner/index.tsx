import React from 'react'
import cn from 'classnames'
import Picture from '../../../Picture'
import * as Text from '../../../Text'
import { Watering as IconWaterign } from '../../../Icon'
import Button from '../../../Button'

import styles from './inner.module.css';


interface Prop {
  title: string
  path: string
  date: string
  tags: string[]
  children: React.ReactNode
  [x: string]: any
}

const Inner: React.FC<Prop> = ({
  children,
  title,
  path,
  date,
  tags,
  size = { width: 184, height: 135 },
  ...props
}) => {
  return (
    <>
      <div className={cn(styles.container, props.className)}>
        <Picture src={path} size={size} alt={title} />
        <div className={styles.body}>
          <div className={styles.header}>
            <Text.TextTitle small>{title}</Text.TextTitle>
            <Text.TextDate small>{date}</Text.TextDate>
          </div>
          <div className={styles.footer}>
            <ul>
              {tags.map((tag, pos) => (
                <Text.TextTag key={pos}>{tag}</Text.TextTag>
              ))}
            </ul>
            <Button href={'/'}>
              <IconWaterign />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inner
