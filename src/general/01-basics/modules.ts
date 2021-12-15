import { capitalize } from './legacy'
import joinArrayToString from './functions'
import './transpilation'
import type { Dog } from './classes-and-interfaces'

export * from './basic-inference'
// @ts-ignore
export { Engineer } from './functions'

// const dog = new Dog('Bobby')

console.log(capitalize('typeScript intro'))

export default function (param: number) {
  return joinArrayToString(['param',String(param)])
}

// export = {}
