import { Manager } from './casting'
import { Engineer } from '../01-basics/functions'

export = {}

type NameOrEngineer = string | Engineer

function normalizeName1 (nameOrEngineer: NameOrEngineer): string {
  // @ts-ignore
  return nameOrEngineer.name ?? nameOrEngineer
}

function normalizeName2 (nameOrEngineer: NameOrEngineer): string {
  return typeof nameOrEngineer === 'string'
    ? nameOrEngineer
    : nameOrEngineer.name
}

type Employee = Engineer | Manager

function getEmployeeSignature1 (employee: Employee): string {
  return 'teamSize' in employee
    ? `${employee.name} (manager of ${employee.teamSize} people)`
    : `${employee.name} (${employee.role} engineer)`
}

function isManager (employee: Employee): employee is Manager {
  return 'teamSize' in employee
}

function getEmployeeSignature2 (employee: Employee): string {
  return isManager(employee)
    ? `${employee.name} (manager of ${employee.teamSize} people)`
    : `${employee.name} (${employee.role} engineer)`
}

enum ComparisonOperator {
  GREATER,
  GREATER_EQUAL,
  LESSER,
  LESSER_EQUAL,
  EQUAL,
  UNEQUAL
}

type Token = {
  tokenType: 'literal',
  valueType: 'string' | 'number' | 'boolean',
  value: any
} | {
  tokenType: 'keyword',
  word: string
} | {
  tokenType: 'operator',
  operator: ComparisonOperator
}

declare function serializeValue (value: any, valueType: 'string' | 'number' | 'boolean'): string

declare function serializeOperator (operator: ComparisonOperator): string

function serializeToken (token: Token) {
  switch (token.tokenType) {
    case 'keyword':
      return token.word
    case 'literal':
      return serializeValue(token.value, token.valueType)
    case 'operator':
      return serializeOperator(token.operator)
  }
}
