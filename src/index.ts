import { toIsAdultString } from './formatters'
import { Person, toPerson } from './person'
import { printer } from './printer'

const printIsAdult = printer(toIsAdultString)

const people: Person[] = [
  toPerson('Steve', 30),
  toPerson('Nancy', 12),
  toPerson('Carl', 18),
  toPerson('Carla', 45),
  toPerson('Ben', 10),
]

people.forEach(printIsAdult)
