import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/react.svg"



function NavBar() {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' />
        <Text>navbar</Text>
    </HStack>
  )
}

export default NavBar