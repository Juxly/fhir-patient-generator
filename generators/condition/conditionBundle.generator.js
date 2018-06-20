import generateCondition from './condition.generator'
import _ from 'lodash'
import faker from 'faker'

import Model from '../../models/condition/conditionBundle.model'

export default function generateConditionBundle (patient, conditionSet) {
  if (typeof conditionSet === 'undefined') return undefined
  var id = faker.random.uuid()
  var conditions = []
  _.forEach(conditionSet, condition => {
    conditions.push(generateCondition(patient, condition))
  })
  return new Model(id, patient, conditions)
}
