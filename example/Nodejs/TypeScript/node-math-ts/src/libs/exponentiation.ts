export const exponentiation = (x: number, y: number): number | any => {
  if (typeof x === 'number' && typeof y === 'number') {
    return Math.pow(x, y)
  }
  return new TypeError('parameter must be number')
}
