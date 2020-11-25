import type { Opioids } from '@src/constants'
import { conversionDict } from '@src/constants'
import { getScaleFactor } from '@src/utils'

type ProductInput = {
  name: keyof typeof Opioids
  dose: number
  frequency: number
}

export function calculateMME(products: ProductInput[]) {
  let result = {
    products: [] as any,
    total: 0
  }

  products.map(product => {
    let conversionObj = { ...conversionDict[product.name] }
    if (conversionObj.scale) {
      let dailyDose = product.dose * product.frequency
      let conversionFactor = getScaleFactor(conversionObj.scale, dailyDose)
      let productTotal = dailyDose * conversionFactor
      result.products.push({name: product.name, total: productTotal})
      result.total += productTotal
    } else {
      let { factor } = conversionObj
      let productTotal = ( product.dose * product.frequency ) * (factor as number)
      result.products.push({name: product.name, total: productTotal})
      result.total += productTotal
    }
  })

  return result
}
