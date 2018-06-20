import fs from 'fs'

var outputDir = './output'
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

export default class PatientSaver {
  constructor (patient) {
    this.patient = patient
    this.conditions = undefined
    this.dir = [outputDir, this.patient.id].join('/')
    if (!fs.existsSync(this.dir)) fs.mkdirSync(this.dir)
  }

  addConditions (conditions) {
    this.conditions = conditions
  }

  savePatient () {
    fs.writeFileSync(this.dir + '/patient.json', `[${JSON.stringify(this.patient)}]`)
    console.log(`\tPatient written to: ${this.dir}/patient.json`)
  }

  saveConditions () {
    fs.writeFileSync(this.dir + '/condition.json', `[${JSON.stringify(this.conditions)}]`)
    console.log(`\tConditions written to: ${this.dir}/condition.json`)
  }

  saveAll () {
    this.savePatient()
    this.saveConditions()
  }
}
