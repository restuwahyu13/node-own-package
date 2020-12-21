exports.exponentiation = (x, y) => {
  if (typeof x === 'number' && typeof y === 'number') {
    return Math.pow(x, y)
  }
  return new TypeError('parameter must be number')
}
