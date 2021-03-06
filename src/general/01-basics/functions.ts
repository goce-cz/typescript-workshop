import { EngineeringRole } from './transpilation'

// @ts-ignore
export function capitalize (text) {
  text.charAtIndex(0).toUpperCase() + text.substring(1).toLowerCase()
}

export interface Engineer {
  name: string
  email: string
  role: EngineeringRole
}

function getEngineerSignature (engineer: Engineer): string {
  return `<${engineer.name} - ${engineer.role}> ${engineer.email}`
}

const createEngineer = (name: string, role: EngineeringRole = EngineeringRole.FS): Engineer => ({
  name,
  role,
  email: `${name}@salsitasoft.com`
})

function join (array: string[], glue?: string) {
  return glue === undefined
    ? array.join('')
    : array.join(glue)
}

export async function fetchJson (url: string): Promise<any> {
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(`server returned HTTP ${response.status} ${response.statusText}`)
  }
}

export default join
