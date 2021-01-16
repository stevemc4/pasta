import React from 'react'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, List, Button, ListItem, Text } from '@chakra-ui/react'

import Templates from '../../templates'
import Template from '../../types/Template'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  onSelect: (template: Template) => void
}

const CopypastaSheet = ({ isOpen, onClose, onSelect }: Props): React.ReactElement => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>
            <Text color="cyan.400">Daftar Copypasta</Text>
          </DrawerHeader>
          <DrawerBody ml={-2}>
          <List listStyleType="none">
            {Templates.map(item => (
              <ListItem
                key={item.name}
              >
                <Button
                  justifyContent="start"
                  bg="transparent"
                  color="gray.600"
                  width="100%"
                  px="2"
                  py="6"
                  borderRadius="4px"
                  transition="background 0.2s"
                  cursor="pointer"
                  _hover={{
                    bg: 'cyan.100'
                  }}
                  onClick={() => onSelect(item)}
                >
                  <Text fontSize="xl">{item.name}</Text>
                </Button>
              </ListItem>
            ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

CopypastaSheet.defaultProps = {
  onSelect: () => {
    // nothing
  }
}

export default CopypastaSheet
