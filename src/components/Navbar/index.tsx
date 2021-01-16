import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'

const Navbar = (): React.ReactElement => {
  return (
    <Box px="4" py="2" h="16" borderTopWidth={4} borderTopColor="cyan.400" borderTopStyle="solid" as="nav" bg="white" boxShadow="sm" position="fixed" zIndex="sticky" w="100vw" top="0">
      <Flex maxW="6xl" marginX="auto" h="100%" alignItems="center">
        <Box>
          <Heading size="lg" color="gray.600">pasta</Heading>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
