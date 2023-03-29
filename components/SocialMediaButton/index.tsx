import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Button from '../Button'
import { GithubFill, TwitterFill, LinkedinFill } from '../Icon'

import styles from './socialMedia.module.css'

const activePlatforms = [
  {
    title: 'github',
    icon: <GithubFill />,
    path: '/'
  },
  {
    title: 'twitter',
    icon: <TwitterFill />,
    path: '/'
  },
  {
    title: 'Linkedin',
    icon: <LinkedinFill />,
    path: '/'
  }
]

function SocialMediaButton({...props}) {
  return (
    <Button className={styles.socialMedia} {...props}>
      {activePlatforms.map((platform, pos) => (
        <Button className={styles.socialMediaBtn} key={pos} href={platform.path}>
          {platform.icon}
        </Button>
      ))}
    </Button>
  )
}

export default SocialMediaButton
