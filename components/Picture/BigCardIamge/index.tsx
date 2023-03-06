import React from 'react'
import Image from 'next/image'
import cn from 'classnames';
import styles from './blogCardImage.module.css'

interface Prop {
  src:string,
  alt:string,
  [x: string]: any
}

const BigCardImage: React.FC<Prop> = ({
  src,
  alt,
  ...props
}) => {
    const size = {width:304,height:336}
  return (
    <>
      <Image className={cn(styles.imageBC,props.className)}
        src={`/${src}`}
        alt={alt}
        width={size.width}
        height={size.height}
        {...props}
      />
    </>
  )
}

export default BigCardImage
