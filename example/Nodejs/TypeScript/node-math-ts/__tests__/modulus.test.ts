import { modulus } from '../src/libs/modulus'

describe('Math Modulus', () => {
  it('test functionality is exitst', () => {
    expect(modulus(10, 2)).toBeDefined()
  })

  it('test functionality modulus', () => {
    expect(modulus(10, 2)).toStrictEqual(0)
  })
})
