import generatePatient from './patient/patient.generator'

console.log('this script generates patients\n')
var patient = generatePatient()
console.log(JSON.stringify(patient))
