export = {}

let person = {
  firstname: 'Carl',
  surname: 'Carlson'
}

let carl = {
  firstname: 'Carl',
  surname: 'Carlson'
} as const


person = {
  firstname: 'Lenny',
  surname: 'Leonard'
}

// @ts-ignore
carl = {
  // @ts-ignore
  firstname: 'Lenny',
  // @ts-ignore
  surname: 'Leonard'
}

// @ts-ignore
carl = person


const array = ['x', 1, false]
const tuple = ['x', 1, false] as const
