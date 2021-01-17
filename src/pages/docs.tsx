import React, { useState } from 'react'
import { Box, Flex, Heading, Text, Code, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import slug from 'slugify'

import Layout from '../layout/Default'

import Template from '../types/Template'

import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'
import CopypastaSheet from '../components/CopypastaSheet'

const Docs = (): React.ReactElement => {
  const [template, setTemplate] = useState<Template>()
  const [openSheet, setOpenSheet] = useState(false)

  const handleTemplateSelect = (newTemplate: Template): void => {
    setOpenSheet(false)
    setTemplate(newTemplate)
  }

  const getInputFields = (): [string, string][] => {
    return Object.entries(template?.fields)
  }

  const getFieldQueries = (): string => {
    if (!template?.fields) return ''
    const fields = getInputFields().map(([key]) => `${key}=value`).join('\n&')
    return `&${fields}`
  }

  return (
    <Layout>
      <Head>
        <title>{`${template ? `${template.name} | ` : ''}pasta Docs`}</title>
      </Head>
      <Flex minH="calc(100vh - 8rem)">
        <Box w={{ base: '0px', md: '256px' }} flexShrink={0}>
          <Sidebar onSelect={handleTemplateSelect} activePage={template?.name} />
        </Box>
      {template
        ? (
        <Box pl={{ base: 0, md: 4 }} w="100%">
          <Heading as="h1" color="gray.600" display={{ base: 'none', md: 'initial' }}>
            {template?.name ?? 'Silakan pilih copypasta terlebih dahulu'}
          </Heading>
          <Button bg="transparent" alignItems="center" p={2} m={-2} display={{ base: 'flex', md: 'none' }} onClick={() => { setOpenSheet(true) }}>
            <Heading as="h1" color="gray.600">
              {template?.name ?? 'Silakan pilih copypasta terlebih dahulu'}
              <ChevronDownIcon ml={2} w={8} h={8} color="cyan.400" />
            </Heading>
          </Button>
          {template && (
            <>
              <Box mt="8">
                <Text fontSize="lg" fontWeight="bold" color="gray.500">ID PASTA</Text>
                <Text fontSize="md" fontWeight="bold" color="gray.600" mb="4">{slug(template.name, {
                  lower: true
                })}</Text>
              </Box>
              {template.fields && (
                <Box mt="8">
                  <Text fontSize="lg" fontWeight="bold" color="gray.500">INPUT</Text>
                  {getInputFields().map(([fieldName, fieldLabel]) => (
                    <Text key={fieldName} fontSize="md">
                      <Code colorScheme="cyan">{fieldName}</Code>
                      : {fieldLabel}
                    </Text>
                  ))}
                </Box>
              )}
              <Box mt="8">
                <Text fontSize="md" fontWeight="bold" color="gray.500" mb={4}>PENGGUNAAN</Text>
                <Box bg="gray.900" p={4} borderRadius="4px" w="100%" overflowX="auto">
                  <Code bg="transparent" color="white" w="100%">
                    /api/use?pasta=
                    {slug(template.name, {
                      lower: true
                    })}
                    {getFieldQueries().split(/\n/g).map(text => (
                      <>
                        <br />
                        {text}
                      </>
                    ))}
                  </Code>
                </Box>
              </Box>
            </>
          )}
        </Box>
          )
        : (
        <Welcome onButtonClick={() => { setOpenSheet(true) }} documentationMode/>
          )}
      </Flex>
      <CopypastaSheet isOpen={openSheet} onClose={() => { setOpenSheet(false) }} onSelect={handleTemplateSelect} activePage={template?.name} />
    </Layout>
  )
}

export default Docs
