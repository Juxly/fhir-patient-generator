import generateCondition from './condition.generator'
import _ from 'lodash'

import Model from '../../models/condition/conditionBundle.model'

export default function generateConditionBundle (patient, conditionSet) {
  var conditions = []
  _.forEach(conditionSet, condition => {
    conditions.push(generateCondition(patient, condition))
  })
  return new Model(patient, conditions)
}
