import React from 'react'
import { Box } from '@chakra-ui/react'

import Navbar from '../../components/Navbar'

interface Props {
  children: React.ReactElement
}

const Default = ({ children }: Props): React.ReactElement => {
  return (
    <Box>
      <Navbar />
      <Box px="4" py="2">
        <Box maxW="6xl" marginX="auto">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Default
