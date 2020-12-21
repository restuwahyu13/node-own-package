const { subtraction } = require('../src/libs/subtraction')

describe('Math Subtraction', () => {
  it('test functionality is exitst', () => {
    expect(subtraction(5, 2)).toBeDefined()
  })

  it('test functionality subtraction', () => {
    expect(subtraction(5, 2)).toStrictEqual(3)
  })

  it('test parameter is not number', () => {
    expect(subtraction('5', 2).message).toStrictEqual('parameter must be number')
  })
})
