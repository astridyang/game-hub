import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function ColorThemeSwitch() {
    const {toggleColorMode, colorMode} = useColorMode(); 
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'light'} onChange={toggleColorMode}></Switch>
        <Text whiteSpace='nowrap'>Light Mode</Text>
    </HStack>
  )
}

export default ColorThemeSwitch