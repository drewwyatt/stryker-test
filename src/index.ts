import { Person, isAdult, toPerson } from './person'

const printIsAdult = (person: Person) =>
  console.log(`${person.name} ${isAdult(person) ? 'is' : 'is not'} an adult.`)

const people: Person[] = [
  toPerson('Steve', 30),
  toPerson('Nancy', 12),
  toPerson('Carl', 18),
  toPerson('Carla', 45),
  toPerson('Ben', 10),
]

people.forEach(printIsAdult)
