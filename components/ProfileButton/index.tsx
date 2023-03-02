import React, { useState } from 'react'
import { Avatar, DownArrowFill, UpArrowFill } from '../Icon'
import Button from '../Button'
import TextButton from '../Text/TextButton'

import styles from './profileButton.module.css'

function ProfileButton({ ...props }) {
  const [arrow, setArrow] = useState(false)

  const handleChacked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrow(!arrow)
  }

  return (
    <>
      <Button {...props}>
        <label className={styles.profileButton} htmlFor="arrow">
          <Avatar />
          <TextButton>Ebg</TextButton>
          {!arrow ? <DownArrowFill /> : <UpArrowFill />}
        </label>
        <input id="arrow" type="checkbox" onChange={handleChacked} />
      </Button>
    </>
  )
}

export default ProfileButton
