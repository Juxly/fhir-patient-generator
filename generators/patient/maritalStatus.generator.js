import rwc from '../../helpers/randomWeightedChoice'
import Model from '../../models/patient/maritalStatus.model'
import maritalStatuses from '../../enumerations/maritalStatuses'

export default function generateMaritalStatus () {
  var maritalStatus = rwc(maritalStatuses)
  return new Model(maritalStatus)
}
