import NavButton from '../components/NavButton';
import * as Icons from '../components/Icon'
import TextButton from '../components/Text/TextButton'
import Nav from '../components/Nav'
import ProfileButton from '../components/ProfileButton';
import SocialMediaButton from '../components/SocialMediaButton';
import ProfileBox from '../components/ProfileBox'



export default {
  title: 'Buttons'
}


export const Light  = () => (
  <NavButton dark={false}  >
    <Icons.Home />
    <TextButton>Default</TextButton>
  </NavButton>
)


export const Dark  = () => (
  <NavButton dark  >
    <Icons.Home />
    <TextButton>Default</TextButton>
  </NavButton>
)

export const Selected  = () => (
  <NavButton dark={false} selected  >
    <Icons.Home />
    <TextButton>Default</TextButton>
  </NavButton>
)


export const NavigationDefault = () => <Nav dark={false}/>

export const NavigationDark = () => <Nav dark/>


export const ProfileButtonDefault = () => <ProfileButton/>


export const SocialMedia = () => <SocialMediaButton />

export const ProfileDefault = () => <ProfileBox dark={false}/>