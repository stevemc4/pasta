import React from 'react'
import { Flex } from '@chakra-ui/react'

import Layout from '../layout/Default'

import Sidebar from '../components/Sidebar'

const Index = (): React.ReactElement => {
  return (
    <Layout>
      <Flex>
        <Sidebar />
      </Flex>
    </Layout>
  )
}

export default Index
