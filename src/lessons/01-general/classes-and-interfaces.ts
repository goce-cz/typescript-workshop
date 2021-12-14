export interface Pet {
  name: string

  /**
   * Call in the pet to yourself.
   *
   * @param decibels strength of the voice calling the pet
   * @returns speed in which the animal approaches
   */
  callIn(decibels: number): number
}

export class Cat implements Pet {
  name: string
  constructor (name: string) {
    this.name = name
  }

  meow() {
    console.log('meow')
  }

  callIn (decibels: number): number {
    return Math.log(1 + decibels)
  }
}

export class Dog implements Pet {
  constructor (
    public readonly name: string
  ) {}

  bark() {
    console.log('woof')
  }

  callIn (decibels: number): number {
    return Math.exp(decibels) - 1
  }
}

let pet: Pet = new Cat('Garfield')
pet = new Dog('Frankie')

const speed = pet.callIn(2)
console.log(`${pet.name} approaches in ${100 / speed} seconds`)

export class YorkshireTerrier extends Dog {
  bark () {
    console.log('woofie')
  }

  callIn (decibels: number): number {
    return super.callIn(decibels) / 5
  }
}
