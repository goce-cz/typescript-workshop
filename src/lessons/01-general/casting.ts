import { Engineer, fetchJson } from './functions'

async function getMailingList (): Promise<string[]> {
  const response = await fetchJson('/employees')
  // const engineers = <Engineer[]>response
  const engineers = response as Engineer[]

  return engineers.map(engineer => engineer.email)
}

export interface Manager {
  name: string
  email: string
  teamSize: number
}

function getEngineeringRole (abstractPerson: Manager) {
  const engineer = abstractPerson as unknown as Engineer
  return engineer.role
}

declare const possiblyOptional: string | undefined | null
console.log(possiblyOptional?.length)

const iKnowItsThere1 = possiblyOptional as string
console.log(iKnowItsThere1.length)

const iKnowItsThere2 = possiblyOptional!
console.log(iKnowItsThere2.length)
