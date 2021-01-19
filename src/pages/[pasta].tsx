import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Templates from '../templates'
import Template from '../types/Template'
import Index from './index'
import slug from 'slugify'

interface Props {
  pasta: Template
}

const PastaID = ({ pasta }: Props): React.ReactElement => {
  return <Index pasta={pasta} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pasta = Templates.find(template => slug(template.name, { lower: true }) === ctx.params?.pasta ?? '')
  return {
    props: {
      pasta: {
        name: pasta?.name,
        fields: pasta?.fields ?? null
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Templates.map(template => {
      return {
        params: {
          pasta: slug(template.name, { lower: true })
        }
      }
    }),
    fallback: false
  }
}

export default PastaID
