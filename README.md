# Morphine Milligram Equivalents Calculation

This is a javascript implementation of the morphine milligram equivalent calculation. It allows one to easily convert opioid products to morphine equivalents.

### References
- [MedCalc](https://www.mdcalc.com/morphine-milligram-equivalents-mme-calculator) example
- CDC [guidelines](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6390846/)

### About
This repo uses typescript for its codebase and jest for testing. Webpack is used to bundle the calculation method to a single distribution file. Along with this tsc is used to create a `lib-esm` dir to allow for esm consumable modules. Jest tests include individual opioid conversions and conversion of an array of products. Test also include the base examples in the CDC guidelines.

### Usage

Import the calculation

Node

```
var { calculateMME } = require('morphine-milligram-equiv')
```

ESM

```
import { calculateMME } from 'morphine-milligram-equiv'

```

This calculation take an array of products and returns morphine milligram equivalents for each product plus a total for all products. A product consists of a js object with a product name, dose (single dosage taken by patient), frequency (how many times a day a dose is taken).

Example:

```
var products = [
    {
      name: 'hydrocodone',
      dose: 5,
      frequency: 4,
    },
    {
      name: 'oxycodone',
      dose: 10,
      frequency: 2,
    }
]

calculateMME(products)
```

Returns

```
{
    products: [{name: 'hydrocodone', total: 20}, {name: 'oxycodone', total: 30}],
    total: 50
}
```

Products with conversion factors are listed in the guidelines, but only include

```
  codeine
  fentanylTransdermal
  hydrocodone
  hydromorphone
  methadone
  morphine
  oxycodone
  oxymorphone
  tapentadol
```

### Tests
Execute `yarn test` to run all test cases using jest

### Build
Execute `yarn build` to generate `dist` and `lib-esm` directories for consuming in node or a browser setting
