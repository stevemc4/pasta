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
    <Box pl={{ base: 0, md: 4 }} pr={4} h="16" borderTopWidth={{ base: 0, md: 4 }} borderTopColor="cyan.400" borderTopStyle="solid" as="nav" bg="white" boxShadow="base" position="fixed" zIndex="sticky" w="100vw" top="0">
      <Flex maxW="6xl" marginX="auto" h="100%" alignItems="center" color="gray.500">
        <IconButton
          aria-label="menu"
          icon={<HamburgerIcon w={6} h={6} />}
          mr={2}
          w={16}
          h={16}
          variant="ghost"
          display={{ base: 'initial', md: 'none' }}
          onClick={() => setShowDrawer(true)}
        />
        <Box>
          <NextLink href="/" passHref>
            <Link _hover={{ textDecor: 'none' }}>
              <Heading size="lg" color="gray.600">pasta</Heading>
            </Link>
          </NextLink>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'initial' }}>
          <HStack spacing={8}>
            <NextLink href="/" passHref>
              <Link fontWeight="bold" color="gray.600" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Beranda</Link>
            </NextLink>
            <NextLink href="/docs" passHref>
              <Link fontWeight="bold" color="gray.600" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Dokumentasi API</Link>
            </NextLink>
            <Link href="https://github.com/stevemc4/pasta" target="_blank" rel="noreferrer nofollow" fontWeight="bold" color="gray.600" _hover={{ textDecor: 'none', color: 'cyan.400' }}>GitHub</Link>
          </HStack>
        </Box>
      </Flex>
      <Drawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} placement="left">
        <DrawerOverlay>
          <DrawerContent>
          <DrawerCloseButton h={12} w={12} />
            <DrawerHeader color="gray.900">Menu</DrawerHeader>
            <DrawerBody>
              <List>
                <ListItem
                  py="2"
                >
                  <NextLink href="/" passHref>
                    <Link fontSize="xl" fontWeight="bold" color="gray.600" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Beranda</Link>
                  </NextLink>
                </ListItem>
                <ListItem
                  py="2"
                >
                  <NextLink href="/docs" passHref>
                    <Link fontSize="xl" fontWeight="bold" color="gray.600" _hover={{ textDecor: 'none', color: 'cyan.400' }}>Dokumentasi API</Link>
                  </NextLink>
                </ListItem>
                <ListItem
                  py="2"
                >
                  <Link href="https://github.com/stevemc4/pasta" target="_blank" rel="noreferrer nofollow" fontSize="xl" fontWeight="bold" color="gray.600" _hover={{ textDecor: 'none', color: 'cyan.400' }}>GitHub</Link>
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
