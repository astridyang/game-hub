import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

function SortSelector() {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
           Order by: Relevance
          </MenuButton>
          <MenuList>
            <MenuItem>Relevance</MenuItem>
          </MenuList>
        </Menu>
      );
}

export default SortSelector