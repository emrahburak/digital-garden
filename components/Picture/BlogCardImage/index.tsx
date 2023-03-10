import React from 'react'
import Image from 'next/image'
import styles from './blogCardImage.module.css'

interface Prop {
  src:string,
  alt:string,
  [x: string]: any
}

const BlogCardImage: React.FC<Prop> = ({
  src,
  alt,
  ...props
}) => {
    const size = {width:304,height:336}
  return (
    <>
      <Image className={styles.imageBC}
        src={`/${src}`}
        alt={alt}
        width={size.width}
        height={size.height}
        {...props}
      />
    </>
  )
}

export default BlogCardImage
