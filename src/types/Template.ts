// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Template<T = any> {
  name: string,
  fields?: T,
  template: (fields: T) => string
}

export default Template
