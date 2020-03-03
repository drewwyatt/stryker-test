import { toIsAdultString } from './formatters'
import { toPerson } from './person'

describe('toIsAdultString', () => {
  const NAME = 'Subject'
  const subject = (age: number) => toIsAdultString(toPerson(NAME, age))

  it("returns a string beginning with a given person's name", () =>
    expect(subject(99)).toMatch(new RegExp(`^${NAME}`)))

  it('should include the words "is not" if the given person is under the age of 18', () =>
    expect(subject(2)).toMatch(/is not/))

  it('should NOT include the word "not" if the given person IS 18', () =>
    expect(subject(18)).toMatch(/is (?!not)/))

  it('should NOT include the word "not" if the given person IS older than 18', () =>
    expect(subject(99)).toMatch(/is (?!not)/))
})
