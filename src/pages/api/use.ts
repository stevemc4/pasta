import { NextApiRequest, NextApiResponse } from 'next'
import slug from 'slugify'

import Templates from '../../templates'

export default function (req: NextApiRequest, res: NextApiResponse): boolean {
  const responseObject = {
    success: true,
    error: '',
    data: {
      pasta: '',
      input: {},
      output: ''
    }
  }

  const { pasta, ...fields } = req.query

  const currentTemplate = Templates.find(template => {
    const templateId = slug(template.name, {
      lower: true
    })
    console.log(templateId)
    return templateId === pasta
  })
  if (!currentTemplate) {
    responseObject.success = false
    responseObject.error = 'ID pasta tidak valid'
    res.send(responseObject)
    return false
  }
  responseObject.data.pasta = currentTemplate.name
  responseObject.data.input = currentTemplate?.fields ?? fields

  if (!currentTemplate.fields) {
    responseObject.data.output = currentTemplate.template({})
    res.send(responseObject)
    return true
  }

  const values = currentTemplate.fields
  Object.entries((fields as Record<string, string>)).map(([key, value]) => {
    values[key] = value
    return true
  })
  responseObject.data.output = currentTemplate.template(values)
  res.send(responseObject)

  return true
}
