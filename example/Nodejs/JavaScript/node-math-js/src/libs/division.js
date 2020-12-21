exports.division = (x, y) => {
  if (typeof x === 'number' && typeof y === 'number') {
    return x / y
  }
  return new TypeError('parameter must be number')
}
