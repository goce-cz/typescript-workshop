import { EmployeeInterface, PersonInterface } from './interface-vs-type'

type Employees = EmployeeInterface[] // Array<EmployeeInterface>

type NamePersonTuple = [string, PersonInterface]

declare const namePersonTuple: NamePersonTuple

const personName = namePersonTuple[0]
const [name, person] = namePersonTuple

type IdNamePersonTuple = [number, ...NamePersonTuple]
declare const idNamePersonTuple: IdNamePersonTuple

const [id1, ...other] = idNamePersonTuple

type IdAndNamesTuple = [number, ...string[]]
declare const idAndNamesTuple: IdAndNamesTuple

const [id2, mainName, ...otherNames] = idAndNamesTuple
