// import _ from 'lodash'
import gaussianRandom from '../../helpers/gaussianRandom'

var meanAge = 46
var ageStandardDeviation = 13

// This probably could be improved, age doesnt exactly follow a normal distribution but for test purposed it is ok
export default function generateBirthDate () {
  var age = 0
  while (age <= 5) age = gaussianRandom(meanAge, ageStandardDeviation)
  var birthDate = new Date(Date.now() - (yearsToSeconds(age) * 1000))
  return birthDate.toISOString().substring(0, 10) // replaces padInt and commented out code
  /*var year = padInt(birthDate.getFullYear(), 4)
  var month = padInt(birthDate.getMonth() + 1, 2)
  var day = padInt(birthDate.getDate(), 2)
  return `${year}-${month}-${day}`*/
}

var secondsInAYear = 365 * 24 * 60 * 60

function yearsToSeconds (years) {
  return years * secondsInAYear
}

/*function padInt (value, length) {
  return _.padStart(value.toString(), length, '0')
}*/
