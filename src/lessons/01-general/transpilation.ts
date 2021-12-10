import { array } from './basic-inference'

export function parseCsv (csvString: string): string[] {
  return csvString.split(',')
}
export enum ExperienceLevel {
  JUNIOR,
  SENIOR,
  GURU
}

console.log(Object.keys(ExperienceLevel))

export enum EngineeringRole {
  QA = 'QA',
  UI = 'UI',
  UX = 'UX',
  FS = 'FS'
}

interface WikiSearchResult {
  query: {
    search: Array<{title: string}>
  }
}

export async function searchForSalsita () {
  const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Salsita&format=json`)
  if (response.ok) {
    const json = await response.json() as WikiSearchResult
    const titles = json.query.search.map(result => result.title)
    return ['Salsita Software', ...titles]
  } else {
    throw new Error(`server responded with ${response.status}`)
  }
}
