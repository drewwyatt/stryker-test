import { Person, isAdult, toPerson } from './person'

describe('isAdult', () => {
  const subject = (age: number): Person => ({ name: 'Subject', age })

  it('returns `true` if a given person is 18', () =>
    expect(isAdult(subject(18))).toEqual(true))

  it('returns `true` if a given person is older than 18', () =>
    expect(isAdult(subject(42))).toEqual(true))

  it('returns `false` if a given person is younger than 18', () =>
    expect(isAdult(subject(2))).toEqual(false))
})

describe('toPerson', () => {
  it("uses the first argument as the person's name", () =>
    expect(toPerson('❤️', 99).name).toEqual('❤️'))

  it("uses the second argument as the person's age", () =>
    expect(toPerson('❤️', 99).age).toEqual(99))
})
