import { getScaleFactor, createRange } from './utils'


describe('Given two numbers create range', () => {
  const testCases = [
    { start: 1, end: 10, expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { start: 4, end: 8, expected: [4, 5, 6, 7, 8] },
  ]

  testCases.forEach( ({start, end, expected}) => {
    test(`given start ${start}, end ${end}, return array ${expected}`, () => {
      expect(createRange(start, end)).toStrictEqual(expected)
    })
  })
})

describe('Given conversion scale and dose return factor', () => {
  const conversionObj = {
    scale: {
      4: [1, 20],
      8: [21, 40],
      10: [41, 60],
      12: [61, 'greater']
    }
  }

  const testCases = [
    { dose: 10, expected: 4 },
    { dose: 25, expected: 8 },
    { dose: 50, expected: 10 },
    { dose: 75, expected: 12 },
    { dose: 90, expected: 12 },
  ]

  testCases.forEach(testCase => {
    test(`Given dose ${testCase.dose} return conversion factor ${testCase.expected} `, () => {
      expect(getScaleFactor(conversionObj.scale, testCase.dose)).toBe(testCase.expected)
    })
  })

})
