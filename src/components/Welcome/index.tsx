import React from 'react'
import Image from 'next/image'
import { Box, Text, Heading, Button, Center } from '@chakra-ui/react'

interface Props {
  onButtonClick: () => void
}

const Welcome = ({ onButtonClick }: Props): React.ReactElement => {
  return (
      <Box w="100%" my="auto">
        <Center mb="4">
          <Image src="/Logo.png" width="128" height="128" quality={100} />
        </Center>

        <Heading textAlign="center" color="cyan.400">Selamat Datang di pasta!</Heading>
        <Text fontSize="lg" fontWeight="bold" color="gray.500" textAlign="center" mb={{ base: 8, md: 0 }}>Silakan pilih copypasta-nya dulu</Text>
        <Center display={{ base: 'flex', md: 'none' }}>
          <Button colorScheme="cyan" color="white" onClick={onButtonClick}>Pilih Copypasta</Button>
        </Center>
      </Box>
  )
}

export default Welcome
