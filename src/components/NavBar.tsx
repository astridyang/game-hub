import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/react.svg"
import ColorThemeSwitch from './ColorThemeSwitch'
import SearchInput from './SearchInput'



function NavBar() {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px' />
        <SearchInput/>
        <ColorThemeSwitch></ColorThemeSwitch>
    </HStack>
  )
}

export default NavBar