import { exponentiation } from '../src/libs/exponentiation'

describe('Math Exponentiation', () => {
  it('test functionality is exitst', () => {
    expect(exponentiation(9, 2)).toBeDefined()
  })

  it('test functionality exponentiation', () => {
    expect(exponentiation(9, 2)).toStrictEqual(81)
  })
})
