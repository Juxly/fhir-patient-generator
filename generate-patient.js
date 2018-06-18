import generatePatient from './patient/patient.generator'
import {testGaussianRandom as tg} from './helpers/gaussianRandom'

console.log('this script generates patients\n')
var patient = generatePatient()
console.log(JSON.stringify(patient))
tg()
