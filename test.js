import generatePatient from './generators/patient/patient.generator'
import generateCondition from './generators/condition/conditionBundle.generator'
import conditionSet from './enumerations/condition_sets/nuerology'
import PatientSaver from './helpers/patientSaver'

var patient = generatePatient()
var condition = generateCondition(patient, conditionSet)

console.log(patient)
console.log(condition)

var patientSaver1 = new PatientSaver(patient)
patientSaver1.addConditions(condition)
patientSaver1.saveAll()
