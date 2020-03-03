import { Person, isAdult } from './person'

export type Formatter<T> = (t: T) => string

export const toIsAdultString: Formatter<Person> = person =>
  `${person.name} ${isAdult(person) ? 'is' : 'is not'} an adult.`
