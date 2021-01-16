import React, { useState, ChangeEvent } from 'react'
import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Container, useClipboard, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Head from 'next/head'

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
      <Head>
        <title>{`${template ? `${template.name} | ` : ''}pasta - Copypasta Untuk Semua`}</title>
      </Head>
      <Flex>
        <Box w={{ base: '0px', md: '256px' }} flexShrink={0}>
          <Sidebar onSelect={handleTemplateSelect}/>
        </Box>
        <Box pl={{ base: 0, md: 4 }} w={{ base: '100%', md: 'initial' }}>
          <Heading as="h1" color="gray.600" display={{ base: 'none', md: 'initial' }}>
            {template?.name ?? 'Silakan pilih copypasta terlebih dahulu'}
          </Heading>
          <Button bg="transparent" alignItems="center" p={2} m={-2} display={{ base: 'flex', md: 'none' }}>
            <Heading as="h1" color="gray.600">
              {template?.name ?? 'Silakan pilih copypasta terlebih dahulu'}
              <ChevronDownIcon ml={2} color="cyan.400" />
            </Heading>
          </Button>
          {template && (
            <>
              <Box mt="8">
                <Text fontSize="lg" fontWeight="bold" color="gray.500" mb="4">INPUT</Text>
                {getInputFields().map(([fieldName, fieldLabel]) => (
                  <FormControl key={`${template.name}:${fieldName}`} mb="2" _last={{ marginBottom: '0' }}>
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
              <Text fontSize="md" fontWeight="bold" color="gray.500" mb="1">OUTPUT</Text>
              <Text mb="4" color="gray.600" fontWeight="bold" fontSize="lg">
                {hasCopied ? 'Teks disalin' : 'Klik atau sentuh teks dibawah ini untuk menyalinnya'}
              </Text>
              <Container p="0" mb="16" cursor="pointer" onClick={onCopy} ml={{ base: '0px', md: 'auto' }}>
              {template.template(inputValues).split(/\n/g).map((line, index) => (
                line.length > 0
                  ? (
                      <Text as="p" key={index}>
                        {line}
                      </Text>
                    )
                  : (
                      <br key={index} />
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
