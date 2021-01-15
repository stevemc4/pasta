import React from 'react'
import { Box } from '@chakra-ui/react'

import Navbar from '../../components/Navbar'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
}

const Default = ({ children }: Props): React.ReactElement => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />
      <Box px="4" pt="16">
        <Box maxW="6xl" marginX="auto">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Default
