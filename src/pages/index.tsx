import React, { useState, useEffect, ChangeEvent } from 'react'
import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Container } from '@chakra-ui/react'

import Layout from '../layout/Default'

import Template from '../types/Template'

import Sidebar from '../components/Sidebar'

const Index = (): React.ReactElement => {
  const [template, setTemplate] = useState<Template>()
  const [inputValues, setInputValues] = useState<Record<string, string>>({})

  useEffect(() => {
    if (template) {
      setInputValues({ ...template.fields })
    }
  }, [template])

  const getInputFields = (): [string, string][] => {
    return Object.entries(template?.fields)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const changed = { ...inputValues }
    changed[e.target.name] = e.target.value
    setInputValues(changed)
  }

  return (
    <Layout>
      <Flex>
        <Sidebar onSelect={setTemplate}/>
        <Box pl="4">
          <Heading as="h1" color="gray.600">{template?.name ?? 'Silakan pilih copypasta terlebih dahulu'}</Heading>
          {template && (
            <>
              <Box mt="8">
                <Text fontSize="lg" fontWeight="bold" color="gray.500" mb="4">INPUT</Text>
                {getInputFields().map(([fieldName, fieldLabel]) => (
                  <FormControl key={fieldName}>
                    <FormLabel color="gray.600">{fieldLabel}</FormLabel>
                    <Input
                      type="text"
                      borderColor="gray.400"
                      borderRadius="4px"
                      name={fieldName}
                      onChange={handleInput}
                      value={inputValues[fieldName]}
                    />
                  </FormControl>
                ))}
              </Box>
              <Box mt="8">
              <Text fontSize="lg" fontWeight="bold" color="gray.500" mb="4">OUTPUT</Text>
              <Container p="0">
              {template.template(inputValues).split(/\n/g).map(line => (
                line.length > 0
                  ? (
                  <>
                    <Text as="p">
                      {line}
                    </Text>
                    <br />
                  </>
                    )
                  : (
                  <></>
                    )
              ))}
              </Container>
            </Box>
            </>
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

export default Index
