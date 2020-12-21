exports.lessThan = (x, y) => {
  if (typeof x === 'number' && typeof y === 'number') {
    return x < y ? true : false
  }
  return new TypeError('parameter must be number')
}
