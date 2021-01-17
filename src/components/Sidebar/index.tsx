import React from 'react'
import { Box, Heading, List, ListItem, Text, Button, VStack, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Template from '../../types/Template'

import Templates from '../../templates'

interface Props {
  onSelect: (template: Template) => void,
  activePage: string
}

const Sidebar = ({ onSelect, activePage }: Props): React.ReactElement => {
  return (
    <Box
      width="256px"
      pr="4"
      borderRight="2px solid"
      ml="-2"
      borderRightColor="gray.200"
      height="calc(100vh - 8rem)"
      overflowY="auto"
      overflowX="auto"
      position="fixed"
      display={{
        base: 'none',
        md: 'initial'
      }}
    >
      <Heading as="h3" fontSize="xl" color="cyan.400" ml="2" mb="8">Daftar Copypasta</Heading>
      <List listStyleType="none">
      {Templates.map(item => (
        <ListItem
          key={item.name}
          _last={{
            mb: 4
          }}
        >
          <Button
            justifyContent="start"
            bg={activePage === item.name ? 'cyan.400' : 'transparent'}
            color={activePage === item.name ? 'white' : 'gray.600'}
            width="100%"
            p="2"
            borderRadius="4px"
            transition="background 0.2s, color 0.2s"
            cursor="pointer"
            h="auto"
            _hover={{
              bg: activePage === item.name ? 'cyan.500' : 'cyan.100'
            }}
            onClick={() => onSelect(item)}
          >
            <VStack alignItems="flex-start" spacing={2}>
              <Text fontSize="lg">{item.name}</Text>
              {/* <Text fontSize="md" color={activePage === item.name ? 'gray.100' : 'gray.500'}>
                {item.fields ? 'Dapat Diedit' : 'Statis'}
              </Text> */}
              <Badge colorScheme="cyan">
                {item.fields ? 'Dinamis' : 'Statis'}
              </Badge>
            </VStack>
            <ChevronRightIcon ml="auto" w={8} h={8} transition="opacity 0.2s" opacity={activePage === item.name ? 1 : 0} />
          </Button>
        </ListItem>
      ))}
      </List>
    </Box>
  )
}

Sidebar.defaultProps = {
  onSelect: () => {
    // nothing
  },
  activePage: ''
}

export default Sidebar
