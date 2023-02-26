import NavButton from '../components/NavButton';
import * as Icons from '../components/Icon'
import TextButton from '../components/Text/TextButton'


export default {
  title: 'Buttons'
}


export const ButtonLightMode  = () => (
  <NavButton dark={false}  >
    <Icons.Home />
    <TextButton>Default</TextButton>
  </NavButton>
)


export const ButtonDarkMode  = () => (
  <NavButton dark  >
    <Icons.Home />
    <TextButton>Default</TextButton>
  </NavButton>
)

export const ButtonAllModeSelected  = () => (
  <NavButton dark={false} selected  >
    <Icons.Home />
    <TextButton>Default</TextButton>
  </NavButton>
)