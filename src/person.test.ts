import { Person, isAdult } from './person'

describe('isAdult', () => {
  const subject = (age: number): Person => ({ name: 'Subject', age })

  it('returns `true` if a given person is 18', () =>
    expect(isAdult(subject(18))).toEqual(true))

  it('returns `true` if a given person is older than 18', () =>
    expect(isAdult(subject(42))).toEqual(true))

  it('returns `false` if a given person is younger than 18', () =>
    expect(isAdult(subject(2))).toEqual(false))
})
