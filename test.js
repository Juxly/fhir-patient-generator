import generatePatient from './generators/patient/patient.generator'
import generateCondition from './generators/condition/conditionBundle.generator'
import conditionSet from './enumerations/condition_sets/nuerology'

var patient = generatePatient()
var condition = generateCondition(patient, conditionSet)

console.log(patient)
console.log(condition)
console.log(condition.entry[0].resource)
