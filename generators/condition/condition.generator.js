import Model from '../../models/condition/condition.model'

export default function generateCondition (patient) {
  var id = 'id12345678'
  return new Model(id, patient)
}
