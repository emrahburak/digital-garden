import React from 'react'
import Link from 'next/link'
import NavButton from '../NavButton'
import Button from '../Button'
import TextButton from '../Text/TextButton'
import TextDate from '../Text/TextDate'
import * as Icons from '../Icon'

import styled from './profileBox.module.css'

function ProfileBox({ dark, ...props }: { dark: boolean }) {
  return (
    <>
      <div className={styled.profileBox}>
        <Button>
          <Icons.Avatar />
          <TextButton>Default</TextButton>
          <Icons.DownArrowFill />
        </Button>
        <NavButton dark={dark}>
          <Icons.HumanMeditationFill />
          Hakkımızda
        </NavButton>
        <Button className={styled.mail}>
          <Icons.GmailFill />
          <TextDate small={true}>gemrahburak@gmail.com</TextDate>
        </Button>
        <Button>
          <Link href={'/'}>
            <Icons.GithubFill />
          </Link>

          <Link href={'/'}>
            <Icons.LinkedinFill />
          </Link>

          <Link href={'/'}>
            <Icons.TwitterFill />
          </Link>
        </Button>
      </div>
    </>
  )
}

export default ProfileBox
