const inRange = (value: number, a: number, b = 0): boolean =>
  Math.min(a, b) <= value && value < Math.max(a, b);

export default inRange;