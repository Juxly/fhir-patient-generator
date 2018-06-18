import generatePatient from './patient/patient.generator'
import generateCondition from './condition/conditionBundle.generator'

var patient = generatePatient()
var condition = generateCondition(patient, [])

console.log(patient)
console.log(condition)
