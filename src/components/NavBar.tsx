import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/react.svg"
import ColorThemeSwitch from './ColorThemeSwitch'



function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' />
        <ColorThemeSwitch></ColorThemeSwitch>
    </HStack>
  )
}

export default NavBar