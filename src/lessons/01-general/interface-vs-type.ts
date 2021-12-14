import { ExperienceLevel } from './transpilation'

// plain objects

interface PersonInterface {
  name: string
  age: number
}

type PersonType = {
  name: string
  age: number
}

// inheritance

interface EmployeeInterface extends PersonInterface {
  level: ExperienceLevel
}

type EmployeeType = PersonType & {
  level: ExperienceLevel
}

declare const employee1: EmployeeInterface
const employee2: EmployeeType = employee1

// reference recursion

interface FamilyMemberInterface extends PersonInterface {
  parents: FamilyMemberInterface[]
}

type FamilyMemberType = PersonType & {
  parents: FamilyMemberType[]
}

// type recursion

type WithParents<T> = { parents: T[] }

interface FamilyMemberInterface2 extends PersonInterface, WithParents<FamilyMemberInterface2> {
}

// @ts-ignore
type FamilyMemberType2 = PersonType & WithParents<FamilyMemberType2>

declare const familyMember: FamilyMemberInterface2

// augmentation

interface PersonInterface {
  height: number
}

// type PersonType = {
//   height: number
// }
