import generatePatient from './patient/patient.generator'
import fs from 'fs'

console.log('this script generates patients\n')
var patient = generatePatient()
console.log(patient)

var patientJSON = JSON.stringify(patient)
var outputDir = ['./output', patient.id].join('/')
var outputFile = outputDir + '/patient.json'

if (!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir);
}
fs.writeFile(outputFile, patientJSON, err => {
  if(err) return console.log(err)
  console.log("The file was saved!")
})
