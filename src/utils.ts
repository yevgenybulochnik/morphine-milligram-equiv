
type Scale = {
  [key: number]: [number, number | 'greater']
}

export function createRange(start: number, end: number) {
  let range = []
  for (let i = start; i <= end; i++ ) {
    range.push(i)
  }
  return range
}

export function getScaleFactor(scale: Scale, dose: number) {
  for (let key in scale) {
    let start = scale[key][0]
    let end = scale[key][1]

    if (end === 'greater') {
      return Number(key)
    }

    let range = createRange(start, end)
    if (range.includes(dose)) {
      return Number(key)
    }
  }
  return 0
}
