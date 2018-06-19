import generatePatient from './generators/patient/patient.generator'
import generateCondition from './generators/condition/conditionBundle.generator'

var patient = generatePatient()
var condition = generateCondition(patient, [])

console.log(patient)
console.log(condition)
