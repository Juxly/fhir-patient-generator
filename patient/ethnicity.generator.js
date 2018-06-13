import rwc from '../randomWeightedChoice'
import ethnicities from '../enumerations/ethnicities'
import Model from '../models/ethnicity.model'

export default function generateEthnicity () {
  var ethnicity = rwc(ethnicities)
  return new Model(ethnicity)
}
