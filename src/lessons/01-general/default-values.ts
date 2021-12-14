export = {}

interface PaddingOptions {
  length?: number
  padding?: string
}

function pad1 (text: string, options: PaddingOptions) {
  return text.padEnd(options.length ?? 20, options.padding ?? '0')
}

function pad2 (text: string, options: PaddingOptions) {
  const {
    length = 20,
    padding = '0'
  } = options

  return text.padEnd(length, padding)
}

function pad3 (
  text: string,
  {
    length = 20,
    padding = '0'
  }: PaddingOptions
) {
  return text.padEnd(length, padding)
}

function pad4 (
  text: string,
  {
    length = 20,
    padding = '0'
  }: PaddingOptions = {}
) {
  return text.padEnd(length, padding)
}

pad4('124')


declare const personWithNullableEmail: {
  name: string
  email: string | null
}

const {
  name,
  email = 'info@salsitasoft.com'
} = personWithNullableEmail

// @ts-ignore
console.log(email.toLowerCase())


declare const sparseTuple: [string | undefined, number | null, boolean]
const [str = 'default', num = 1, bool = false] = sparseTuple
console.log(str.toLowerCase())
// @ts-ignore
console.log(num.toFixed(1))
