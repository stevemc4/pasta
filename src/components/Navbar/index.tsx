import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import Router from 'next/router'
import { Flex, Box, Heading, Spacer, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, ListItem, List, HStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = (): React.ReactElement => {
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setShowDrawer(false)
    })
    return () => {
      Router.events.off('routeChangeStart', () => {
        setShowDrawer(false)
      })
    }
  }, [])

  return (
    <Box px="4" py="2" h="16" borderTopWidth={4} borderTopColor="cyan.400" borderTopStyle="solid" as="nav" bg="white" boxShadow="sm" position="fixed" zIndex="sticky" w="100vw" top="0">
      <Flex maxW="6xl" marginX="auto" h="100%" alignItems="center" color="gray.500">
        <IconButton
          aria-label="menu"
          icon={<HamburgerIcon />}
          mr={2}
          variant="ghost"
          display={{ base: 'initial', md: 'none' }}
          onClick={() => setShowDrawer(true)}
        />
        <Box>
          <NextLink href="/">
            <Link _hover={{ textDecor: 'none' }}>
              <Heading size="lg" color="gray.600" mt={-2}>pasta</Heading>
            </Link>
          </NextLink>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'initial' }}>
          <HStack spacing={8}>
            <NextLink href="/">
              <Link fontWeight="bold" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Beranda</Link>
            </NextLink>
            <NextLink href="/docs">
              <Link fontWeight="bold" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Dokumentasi API</Link>
            </NextLink>
          </HStack>
        </Box>
      </Flex>
      <Drawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} placement="left">
        <DrawerOverlay>
          <DrawerContent>
          <DrawerCloseButton h={12} w={12} />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <List>
                <ListItem
                  py="2"
                >
                  <NextLink href="/">
                    <Link fontSize="xl" fontWeight="bold" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Beranda</Link>
                  </NextLink>
                </ListItem>
                <ListItem
                  py="2"
                >
                  <NextLink href="/docs">
                    <Link fontSize="xl" fontWeight="bold" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Dokumentasi API</Link>
                  </NextLink>
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default Navbar
