export default function sum(a, b) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number') {
    throw new TypeError('Error: Wrong argument type!')
  }
  return a + b
}
