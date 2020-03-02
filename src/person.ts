export type Person = {
  name: string
  age: number
}

export const isAdult = (person: Person) => person.age >= 18

export const toPerson = (name: string, age: number) => ({ name, age })
