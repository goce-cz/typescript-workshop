import { PersonInterface } from './interface-vs-type'

type ElectronicPerson = PersonInterface & { email: string }

type AugmentedString = string & {
  digitallySign (): string
}

declare const augmentedString: AugmentedString

console.log(augmentedString.toLowerCase(), augmentedString.digitallySign())
