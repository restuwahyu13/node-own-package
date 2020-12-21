const { division } = require('../src/libs/division')

describe('Math Division', () => {
  it('test functionality is exitst', () => {
    expect(division(2, 2)).toBeDefined()
  })

  it('test functionality division', () => {
    expect(division(8, 2)).toStrictEqual(4)
  })

  it('test parameter is not number', () => {
    expect(division('8', 2).message).toStrictEqual('parameter must be number')
  })
})
