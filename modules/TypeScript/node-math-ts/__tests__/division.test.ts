import { division } from '../src/libs/division'

describe('Math Division', () => {
  it('test functionality is exitst', () => {
    expect(division(2, 2)).toBeDefined()
  })

  it('test functionality division', () => {
    expect(division(8, 2)).toStrictEqual(4)
  })
})
