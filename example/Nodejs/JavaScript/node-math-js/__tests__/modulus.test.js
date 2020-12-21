const { modulus } = require('../src/libs/modulus')

describe('Math Modulus', () => {
  it('test functionality is exitst', () => {
    expect(modulus(10, 2)).toBeDefined()
  })

  it('test functionality modulus', () => {
    expect(modulus(10, 2)).toStrictEqual(0)
  })

  it('test parameter is not number', () => {
    expect(modulus('10', 2).message).toStrictEqual('parameter must be number')
  })
})
