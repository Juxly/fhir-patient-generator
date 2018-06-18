import _ from 'lodash'

// this function generates normalized values from any distribution with mean 'mu' and standard deviation 'sigma'
export default function gaussianRandom (mu, sigma) {
  var u = 0
  var v = 0
  while (u === 0) u = Math.random() // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random()
  var deviation = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  return deviation * sigma + mu
}

export function testGaussianRandom () {
  var expectedStandardDeviation = 100
  var values = 10000
  var testValues = []
  for (var i = 0; i < values; i++) {
    testValues.push(gaussianRandom(0, expectedStandardDeviation))
  }
  var experimantalStandardDeviaton = standardDeviation(testValues)
  console.log('Testing gaussian random function')
  console.log(`Generated ${values} random test values`)
  console.log(`Expected standard deviation: ${expectedStandardDeviation}`)
  console.log(`Actual standard deviation: ${experimantalStandardDeviaton}`)
}

export function standardDeviation (array) {
  return Math.sqrt(variance(array))
}

export function variance (array) {
  var sumOfSquaredDifferences = 0
  _.forEach(array, e => {
    sumOfSquaredDifferences = sumOfSquaredDifferences + Math.pow(e, 2)
  })
  return sumOfSquaredDifferences / array.length
}

export function average (array) {
  var total = 0
  _.forEach(array, e => {
    total = total + e
  })
  return total / array.length
}
