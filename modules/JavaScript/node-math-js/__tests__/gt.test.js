const { greaterThan } = require('../src/libs/greaterThan')

describe('Math Comparison Greater Than', () => {
  it('test functionality is exitst', () => {
    expect(greaterThan(10, 2)).toBeDefined()
  })

  it('test functionality value x > y is return true', () => {
    expect(greaterThan(5, 2)).toBeTruthy()
  })

  it('test functionality value x < x is return true', () => {
    expect(greaterThan(10, 20)).toBeFalsy()
  })

  it('test parameter is not number', () => {
    expect(greaterThan('10', 2).message).toStrictEqual('parameter must be number')
  })
})
