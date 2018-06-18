import generateCondition from '../condition/condition.generator'

import Model from '../models/condition/conditionBundle.model'

export default function generateConditionBundle (patient) {
  var condition1 = generateCondition(patient)
  return new Model(patient, [condition1])
}
