import React, { useState, ChangeEvent } from 'react'
import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Container, useClipboard } from '@chakra-ui/react'

import Layout from '../layout/Default'

import Template from '../types/Template'

import Sidebar from '../components/Sidebar'

const Index = (): React.ReactElement => {
  const [template, setTemplate] = useState<Template>()
  const [inputValues, setInputValues] = useState<Record<string, string>>({})
  const { hasCopied, onCopy } = useClipboard(template?.template(inputValues).split(/\n/g).map(item => item.trim()).join('\n') ?? '')

  const handleTemplateSelect = (newTemplate: Template): void => {
    setTemplate(newTemplate)
    setInputValues({ ...newTemplate.fields })
  }

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
        <Box w="256px">
          <Sidebar onSelect={handleTemplateSelect}/>
        </Box>
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
              <Container p="0" mb="8" cursor="pointer" onClick={onCopy}>
              {template.template(inputValues).split(/\n/g).map(line => (
                line.length > 0
                  ? (
                  <>
                    <Text as="p">
                      {line}
                    </Text>
                    {/* <br /> */}
                  </>
                    )
                  : (
                  <></>
                    )
              ))}
              </Container>
              <Text mb="16" color="gray.600" fontWeight="bold" fontSize="lg">
                {hasCopied ? 'Teks disalin' : 'Klik atau sentuh teks diatas untuk menyalinnya'}
              </Text>
            </Box>
            </>
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

export default Index
