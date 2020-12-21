import { subtraction } from '../src/libs/subtraction'

describe('Math Subtraction', () => {
  it('test functionality is exitst', () => {
    expect(subtraction(5, 2)).toBeDefined()
  })

  it('test functionality subtraction', () => {
    expect(subtraction(5, 2)).toStrictEqual(3)
  })
})
