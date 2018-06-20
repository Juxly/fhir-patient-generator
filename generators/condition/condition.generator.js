import generateId from '../../generators/condition/id.generator'
import Model from '../../models/condition/condition.model'

export default function generateCondition (patient, condition) {
  var id = generateId()
  return new Model(id, patient, condition)
}
