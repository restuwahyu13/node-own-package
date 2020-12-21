import { multiplication } from '../src/libs/multiplication'

describe('Math Multiplication', () => {
  it('test functionality is exitst', () => {
    expect(multiplication(20, 2)).toBeDefined()
  })

  it('test functionality multiplication', () => {
    expect(multiplication(20, 2)).toStrictEqual(40)
  })
})
