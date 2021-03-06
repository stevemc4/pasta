import React from 'react'
import NextLink from 'next/link'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, List, Button, ListItem, Text, VStack, DrawerCloseButton } from '@chakra-ui/react'
import slug from 'slugify'

import Templates from '../../templates'
import Template from '../../types/Template'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  onSelect: (template: Template) => void,
  activePage: string,
  basePath: string
}

const CopypastaSheet = ({ isOpen, onClose, onSelect, activePage, basePath }: Props): React.ReactElement => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton h={12} w={12} />
          <DrawerHeader>
            <Text color="cyan.400">Daftar Copypasta</Text>
          </DrawerHeader>
          <DrawerBody ml={-2}>
          <List listStyleType="none">
            {Templates.map(item => (
              <ListItem
                key={item.name}
              >
                <NextLink href={`${basePath}/${slug(item.name, { lower: true })}`} passHref shallow>
                  <Button
                    justifyContent="start"
                    bg={activePage === item.name ? 'cyan.400' : 'transparent'}
                    color={activePage === item.name ? 'white' : 'gray.600'}
                    width="100%"
                    px="2"
                    py="2"
                    borderRadius="4px"
                    transition="background 0.2s, color 0.2s"
                    cursor="pointer"
                    h="auto"
                    _hover={{
                      bg: 'cyan.100'
                    }}
                    onClick={() => onSelect(item)}
                    as="a"

                  >
                    <VStack alignItems="flex-start" spacing={0}>
                      <Text fontSize="lg">{item.name}</Text>
                      <Text fontSize="md" color={activePage === item.name ? 'gray.100' : 'gray.500'}>
                        {item.fields ? 'Dinamis' : 'Statis'}
                      </Text>
                    </VStack>
                  </Button>
                </NextLink>
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
  },
  activePage: '',
  basePath: ''
}

export default CopypastaSheet
