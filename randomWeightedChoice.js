import _ from 'lodash'

// choses a random item from an array of objects
// each objects weight atribute controls how likely it is to be chosen
// this function works fastest if the array is sorted by item weight from highest to lowest
export default function randomWeightedChoice (array) {
  // find total weight
  var totalWeight = 0
  _.forEach(array, item => {
    totalWeight += item.weight
  })

  //get random float between [0, totalWeight)
  var randomWeight = Math.random() * totalWeight

  // subtract weights from randomWeight until a match is found
  return _.find(array, item => {
    randomWeight = randomWeight - item.weight
    return randomWeight <= 0
  })
}
