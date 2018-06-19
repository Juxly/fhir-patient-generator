#!/usr/bin/env babel-node
import args from 'args'
import generatePatient from './generators/patient/patient.generator'
import savePatient from './helpers/savePatient'

args
  .option('patients', 'How many patients to generate', 1)
  .option('specialty', 'Which specialty the patient should be generated with', '')

const flags = args.parse(process.argv)
console.log(flags)

for (var i = 0; i < flags.patients; i++) {
  var patient = generatePatient()
  console.log(JSON.stringify(patient))
  savePatient(patient)
  switch (flags.specialty) {
    case 'nuerology':
      console.log('nuerology')
      break
    case 'hcc':
      console.log('hcc')
      break
    default:
      console.log('No known specialty selected')
  }
}
