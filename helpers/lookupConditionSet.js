import nuerologySet from '../enumerations/condition_sets/nuerology'
import hccSet from '../enumerations/condition_sets/hcc'

export default function lookupConditionSet (specialty) {
  switch (specialty) {
    case 'nuerology':
      return nuerologySet

    case 'hcc':
      return hccSet

    default:
      return undefined
  }
}
