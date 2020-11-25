import { calculateMME } from '@src/index'

describe('Given opioid drug product calculate morphine equiv', () => {
  const testCases: any[] = [
    {
      name: 'codeine',
      dose: 15,
      frequency: 4,
      expected: { products: [{name: 'codeine', total: 9}], total: 9 }
    },
    {
      name: 'hydrocodone',
      dose: 5,
      frequency: 4,
      expected: { products: [{name: 'hydrocodone', total: 20}], total: 20 }
    },
    {
      name: 'oxycodone',
      dose: 10,
      frequency: 2,
      expected: { products: [{name: 'oxycodone', total: 30}], total: 30 }
    },
    {
      name: 'methadone',
      dose: 15,
      frequency: 2,
      expected: { products: [{name: 'methadone', total: 240}], total: 240 }
    },
    {
      name: 'fentanylTransdermal',
      dose: 12.5,
      frequency: 1,
      expected: { products: [{name: 'fentanylTransdermal', total: 30}], total: 30 }
    },
    {
      name: 'oxymorphone',
      dose: 10,
      frequency: 2,
      expected: { products: [{name: 'oxymorphone', total: 60}], total: 60 }
    }
  ];

  testCases.forEach(({name, dose, frequency, expected}) => {
    test(`given ${name}, dose ${dose} and freq ${frequency} expected mme ${expected.total}`, () => {
      expect(calculateMME([{name, dose, frequency}])).toStrictEqual(expected)
    })
  })

})

describe('Given product array calculate individual product total + complete total', () => {
  const testCases: any[] = [
    {
      products: [
        {
          name: 'hydrocodone',
          dose: 5,
          frequency: 4,
        },
        {
          name: 'oxycodone',
          dose: 10,
          frequency: 2,
        },
      ],
      expected: {
        products: [{name: 'hydrocodone', total: 20}, {name: 'oxycodone', total: 30}],
        total: 50
      }
    },
  ]

  testCases.forEach((testCase) => {
    test(`given product array return result with total ${testCase.expected.total}`, () => {
      expect(calculateMME(testCase.products)).toStrictEqual(testCase.expected)
    })
  })
})
