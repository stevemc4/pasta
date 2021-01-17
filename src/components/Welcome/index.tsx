import React from 'react'
import Image from 'next/image'
import { Box, Text, Heading, Button, Center } from '@chakra-ui/react'

interface Props {
  onButtonClick: () => void,
  documentationMode: boolean
}

const Welcome = ({ onButtonClick, documentationMode }: Props): React.ReactElement => {
  return (
      <Box w="100%" my="auto">
        <Center mb="4">
          <Image src={`/${documentationMode ? 'docs-' : ''}logo.png`} width="128" height="128" quality={100} alt="pasta Logo" />
        </Center>
        <Heading textAlign="center" color="cyan.400">
          {documentationMode ? 'Selamat Datang di Dokumentasi pasta' : 'Selamat Datang di pasta!'}
        </Heading>
        <Text fontSize="lg" fontWeight="bold" color="gray.500" textAlign="center" mb={{ base: 8, md: 0 }}>Silakan pilih copypasta-nya dulu</Text>
        <Center display={{ base: 'flex', md: 'none' }}>
          <Button colorScheme="cyan" color="white" onClick={onButtonClick}>Pilih Copypasta</Button>
        </Center>
      </Box>
  )
}

Welcome.defaultProps = {
  documentationMode: false
}

export default Welcome
