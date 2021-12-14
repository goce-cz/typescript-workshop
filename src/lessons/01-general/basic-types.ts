export = {}

declare const stringVar:  string
declare const booleanVar: boolean
declare const numberVar:  number

declare const voidVar: void
declare const nullVar: null
declare const undefinedVar: undefined

declare const unknownVar: unknown
declare const anyVar: any

console.log(anyVar.abraka)
// @ts-ignore
console.log(unknownVar.abraka)


declare const objectVar: {
  firstname: string
  middleName?: string
  surname: string
  age: number
  emails: string[]
}

declare const arrayVar1: string[]
declare const arrayVar2: Array<{name: string}>
