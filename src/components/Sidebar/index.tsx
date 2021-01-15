import React from 'react'
import { Box, Heading, List, ListItem, Text, Button } from '@chakra-ui/react'

import Template from '../../types/Template'

import Templates from '../../templates'

interface Props {
  onSelect: (template: Template) => void
}

const Sidebar = ({ onSelect }: Props): React.ReactElement => {
  return (
    <Box
      width="256px"
      pr="4"
      borderRight="2px solid"
      ml="-2"
      borderRightColor="gray.200"
      height="calc(100vh - 3.5rem - 4rem)"
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
        >
          <Button
            justifyContent="start"
            bg="transparent"
            color="gray.600"
            width="100%"
            p="2"
            borderRadius="4px"
            transition="background 0.2s"
            cursor="pointer"
            _hover={{
              bg: 'cyan.100'
            }}
            onClick={() => onSelect(item)}
          >
            <Text fontSize="lg">{item.name}</Text>
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
  }
}

export default Sidebar
