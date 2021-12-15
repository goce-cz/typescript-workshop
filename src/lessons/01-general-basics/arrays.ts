import { Pet } from './classes-and-interfaces'

type Pets = Pet[] // Array<Pet>

type RacePetTuple = [string, Pet]

declare const racePetTuple: RacePetTuple

const petRace = racePetTuple[0]
const [race, pet] = racePetTuple

type IdRacePetTuple = [number, ...RacePetTuple]
declare const idRacePetTuple: IdRacePetTuple

const [id1, ...other] = idRacePetTuple

type IdAndNamesTuple = [number, ...string[]]
declare const idAndNamesTuple: IdAndNamesTuple

const [id2, mainName, ...otherNames] = idAndNamesTuple
