#!/usr/bin/env babel-node
import args from 'args'
import generatePatient from './patient/patient.generator'
import savePatient from './helpers/savePatient'

args
  .option('save', 'Saves patient to disk if true', false)
  .option('print', 'Prints patient to console if true', false)
  .option('patients', 'How many patients to generate', 1)

const flags = args.parse(process.argv)
console.log(flags)

for (var i = 0; i < flags.patients; i++) {
  var patient = generatePatient()
  if (flags.print) console.log(JSON.stringify(patient))
  if (flags.save) savePatient(patient)
}
