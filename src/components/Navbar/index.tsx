import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'

const Navbar = (): React.ReactElement => {
  return (
    <Box px="4" py="2" borderTopWidth={4} borderTopColor="cyan.400" borderTopStyle="solid" as="nav" bg="gray.50">
      <Flex maxW="6xl" marginX="auto">
        <Box>
          <Heading size="lg" color="gray.600">pasta</Heading>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
