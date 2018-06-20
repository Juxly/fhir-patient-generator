import fs from 'fs'

export default class PatientSaver {
  constructor (patient) {
    this.patient = patient
    this.conditions = undefined
    this.dir = ['.', 'output', this.patient.id].join('/')
  }

  addConditions (conditions) {
    this.conditions = conditions
  }

  savePatient () {
    if (!fs.existsSync(this.dir)) fs.mkdirSync(this.dir)
    fs.writeFileSync(this.dir + '/patient.json', `[${JSON.stringify(this.patient)}]`)
    console.log(`\tPatient written to: ${this.dir}/patient.json`)
  }

  saveConditions () {
    if (!fs.existsSync(this.dir)) fs.mkdirSync(this.dir)
    fs.writeFileSync(this.dir + '/condition.json', `[${JSON.stringify(this.conditions)}]`)
    console.log(`\tConditions written to: ${this.dir}/condition.json`)
  }

  saveAll () {
    this.savePatient()
    this.saveConditions()
  }
}
