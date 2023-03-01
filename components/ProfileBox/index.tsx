import React from 'react'
import Link from 'next/link'
import NavButton from '../NavButton'
import Button from '../Button'
import TextButton from '../Text/TextButton'
import TextDate from '../Text/TextDate'
import * as Icons from '../Icon'

import styled from './profileBox.module.css'
import SocialMediaButton from '../SocialMediaButton'

const MENU = [
  {
    title: 'Ebg',
    icon: [ <Icons.Avatar/>,<Icons.DownArrowFill />]
  },
  {
    title: 'Hakkımızda',
    icon: [<Icons.HumanMeditationFill />]
  },
  {
    title: 'gemrahburak@gmail.com',
    icon: [<Icons.GmailFill />]
  },
]

function ProfileBox({ dark, ...props }: { dark: boolean }) {
  return (
    <>
      <div className={styled.profileBox}>
        {MENU.map((btn, pos) => (
          <Button key={pos}>
            {btn.icon[0]}
            {pos !== MENU.length -1 ? (
              <TextButton>{btn.title}</TextButton>
            ) : (
              <TextDate small={true}>{btn.title}</TextDate>
            )}
            {btn.icon.length > 1 && btn.icon[1]}
          </Button>
        ))}
        <SocialMediaButton />
      </div>
    </>
  )
}

export default ProfileBox
