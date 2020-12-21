const { lessThan } = require('../src/libs/lessThan')

describe('Math Comparison Greater Than', () => {
  it('test functionality is exitst', () => {
    expect(lessThan(10, 2)).toBeDefined()
  })

  it('test functionality value x > y is return true', () => {
    expect(lessThan(5, 2)).toBeFalsy()
  })

  it('test functionality value x < y is return true', () => {
    expect(lessThan(10, 20)).toBeTruthy()
  })

  it('test parameter is not number', () => {
    expect(lessThan('10', 2).message).toStrictEqual('parameter must be number')
  })
})
