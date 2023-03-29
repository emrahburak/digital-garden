import React from 'react'
import * as Icons from '../Icon';
import NavButton from '../NavButton'
import TextButton from '../Text/TextButton';

import styles from './nav.module.css'

const MENU = [
    {
        title:'Blog',
        logo: <Icons.Home/>
    },
    {
        title:'Dijital Bahçe',
        logo: <Icons.FloverFill/>
    },
    {
        title:'Portfolyo',
        logo: <Icons.Materials/>
    }
]



function Nav({dark,...props}:{dark:boolean}) {
  return (
    <>
      <nav className={styles.nav}>
        {MENU.map((menu,pos) => (
            <NavButton key={pos} dark={dark}>
                {menu.logo}
            <TextButton>{menu.title}</TextButton>

            </NavButton>
        ))}

      </nav>
    </>
  )
}

export default Nav
