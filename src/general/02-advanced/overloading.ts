import { EngineeringRole } from '../01-basics/transpilation'

enum ManagerLevel {
  PM,
  COO,
  CEO,
  CTO
}

interface Manager {
  managementLevel: ManagerLevel
}

interface Engineer {
  engineeringRole: EngineeringRole
}

function getRole (employee: Manager): ManagerLevel
function getRole (employee: Engineer): EngineeringRole
function getRole (employee: Manager | Engineer): ManagerLevel | EngineeringRole {
  return 'managementLevel' in employee
    ? employee.managementLevel
    : employee.engineeringRole
}

declare const manager: Manager
declare const engineer: Engineer

const role = getRole(manager)

class JQueryLike {
  private value = 0

  getSet (property: string): number
  getSet (property: string, value: number): this
  getSet (property: string, value?: number): number | this {
    if (value === undefined) {
      return this.value
    } else {
      this.value = value
      return this
    }
  }
}

function chainFunctions<I, O, X1> (f1: (arg: I) => X1, f2: (arg: X1) => O): (arg: I) => O
function chainFunctions<I, O, X1, X2> (f1: (arg: I) => X1, f2: (arg: X1) => X2, f3: (arg: X2) => O): (arg: I) => O
// ...
function chainFunctions<I, O> (...functions: Array<(arg: any) => any>): (arg: any) => any {
  return (arg) => functions.reduce((value, func) => func(value), arg)
}
