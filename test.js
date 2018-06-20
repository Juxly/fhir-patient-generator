
import yargs from 'yargs'
import lookupConditionSet from './helpers/lookupConditionSet'
import generatePatient from './generators/patient/patient.generator'
import generateConditionBundle from './generators/condition/conditionBundle.generator'
import PatientSaver from './helpers/patientSaver'

const argv = yargs
  .option('specialty', {
    alias: 's',
    default: 'None',
    describe: 'Specifies the Specialty of the patients generated',
    type: 'string'
  })
  .option('quantity', {
    alias: 'q',
    default: 1,
    describe: 'Defines how many patients will be generated',
    type: 'number'
  })
  .option('verbose', {
    alias: 'v',
    default: false,
    describe: 'Program prints patients to console as they are generated',
    type: 'boolean'
  })
  .help().alias('help', 'h')
  .version('v1.0.0').alias('version', 'V')
  .argv

function main () {
  // test flags
  if (argv.quantity <= 0) {
    console.log('ERROR: Patient quantity must be greater than 0')
    return false
  }
  if (!Number.isSafeInteger(argv.quantity)) {
    console.log('ERROR: Patient quantity must be an integer')
    return false
  }
  if (typeof lookupConditionSet(argv.specialty) === 'undefined') {
    console.log(`ERROR: "${argv.specialty}" is not a known specialty`)
    return false
  }

  // main generation loop
  for (var i = 1; i <= argv.quantity; i++) {
    console.log('\nGenerating patient ' + i)

    // generate patient, print if in verbose mode
    var patient = generatePatient()
    if (argv.verbose) console.log('\n\tpatient.json\n' + JSON.stringify(patient))

    // generate conditions, print if in verbose mode
    var conditionSet = lookupConditionSet(argv.specialty)
    var conditions = generateConditionBundle(patient, conditionSet)
    if (argv.verbose) console.log('\n\tcondition.json\n' + JSON.stringify(patient))

    // create PatientSaver object and save patient to file
    var patientSaver = new PatientSaver(patient)
    if (typeof conditions !== 'undefined') {
      patientSaver.addConditions(conditions)
      patientSaver.saveAll()
    } else {
      patientSaver.savePatient()
    }
    console.log(`\tPatient ${i} complete`)
  }
  console.log('Complete. All patients generated')
}

main()
