import { addition } from '../src/libs/addition'

describe('Math Addition', () => {
  it('test functionality is exitst', () => {
    expect(addition(2, 2)).toBeDefined()
  })

  it('test functionality addition', () => {
    expect(addition(2, 2)).toStrictEqual(4)
  })
})
