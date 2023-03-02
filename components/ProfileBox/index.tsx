import React, { useState } from 'react'
import Button from '../Button'
import ProfileButton from '../ProfileButton'
import TextButton from '../Text/TextButton'
import TextDate from '../Text/TextDate'
import * as Icons from '../Icon'

import styles from './profileBox.module.css'
import SocialMediaButton from '../SocialMediaButton'

const MENU = [
  {
    title: 'Hakkımızda',
    icon: <Icons.HumanMeditationFill />,
    component: null
  },
  {
    title: 'gemrahburak@gmail.com',
    icon: <Icons.GmailFill />,
    component: null
  }
]

const menuStyle = [{ top: 0 }, { bottom: 0 }]

interface Prop {
  title: string
}

const TextType: React.FC<Prop> = ({ title }) => {
  const re = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$')
  const result = re.exec(title) && true
  const Component = !result ? TextButton : TextDate
  return <Component small={true}>{title}</Component>
}

function ProfileBox({ dark, ...props }: { dark: boolean }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    console.log(open)
    setOpen(!open)
  }

  return (
    <>
      <div className={styles.profileBox}>
        <ProfileButton className={styles.box} onClick={handleClick} />
        <div className={styles.openBox}>
          {open &&
            MENU.map((element, pos) => (
              <Button key={pos}>
                {element.icon}
                <TextType title={element.title} />
              </Button>
            ))}
          {open && <SocialMediaButton />}
        </div>
      </div>
    </>
  )
}

export default ProfileBox

{
  /* {MENU.map((btn, pos) => (
          <Button key={pos}>
            {btn.icon[0]}
            {pos !== MENU.length -1 ? (
              <TextButton>{btn.title}</TextButton>
            ) : (
              <TextDate small={true}>{btn.title}</TextDate>
            )}
            {btn.icon.length > 1 && btn.icon[1]}
          </Button>
        ))} */
}
