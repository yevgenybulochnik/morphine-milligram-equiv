
export enum Opioids {
  codeine,
  fentanylTransdermal,
  hydrocodone,
  hydromorphone,
  methadone,
  morphine,
  oxycodone,
  oxymorphone,
  tapentadol,
}

type OpioidKeys = {
  factor?: number,
  scale?: {
    [key: number]: [ number, number | 'greater' ]
  }
}

type ConversionDict = {
  [key in keyof typeof Opioids]: OpioidKeys
}

export const conversionDict: ConversionDict = {
  codeine: {
    factor: 0.15,
  },
  fentanylTransdermal: {
    factor: 2.4,
  },
  hydrocodone: {
    factor: 1,
  },
  hydromorphone: {
    factor: 4,
  },
  methadone: {
    scale: {
      4: [1, 20],
      8: [21, 40],
      10: [41, 60],
      12: [61, 'greater']
    }
  },
  morphine: {
    factor: 1,
  },
  oxycodone: {
    factor: 1.5,
  },
  oxymorphone: {
    factor: 3,
  },
  tapentadol: {
    factor: 0.4,
  }
}
