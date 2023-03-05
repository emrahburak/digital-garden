import React from 'react'
import * as Text from '../../Text';
import Button from '../../Button'
import styles from '../card.module.css'
import * as Icon from '../../Icon';

interface Prop {
  children: React.ReactNode
  tags: string[]
  [x: string]: any
}

const BigCardBody: React.FC<Prop> = ({ children,date,title,tags, ...props }) => {
  return (
    <>
      <div className={styles.bigCardBody}>
        <div className={styles.bigCardHeader}>
          <Text.TextTitle>{title}</Text.TextTitle>
          <Text.TextDate small={false}>{date}</Text.TextDate>
        </div>
        <Text.TextBody className={styles.blogCardBody}>{children}</Text.TextBody>
        <div className={styles.bigCardFooter}>
          <ul>
            {tags.map((tag, pos) => (
              <Text.TextTag key={pos}> {tag}</Text.TextTag>
            ))}
          </ul>
          <Button href={'/'}>
            <Icon.Read />
          </Button>
        </div>
      </div>
    </>
  )
}

const SmallCardBody: React.FC<Prop> = ({ children, ...props }) => {
  return <></>
}

const CardBody: React.FC<Prop> = ({ children, ...props }) => {
  const Component = props.type === 'big' ? BigCardBody : SmallCardBody
  return <Component {...props}>{children}</Component>
}

export default CardBody
