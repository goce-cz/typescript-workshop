export const PRIMITIVE = 'a'

export const object = {
  hello: 'ahoj',
  world: 'světe'
}

export const array = [
  object,
  'string'
]

function doSomething() {
  if(Math.random() < 0.5) {
    return null
  }

  return {
    name: 'Carl',
    surname: 'Carlson'
  }
}


console.log(object.world)

