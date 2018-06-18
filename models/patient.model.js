
export default class PatientModel {
  constructor (id, race, ethnicity, name, telecom, gender, birthDate) {
    this.resourceType = 'Patient'
    this.id = id
    this.extension = [race, ethnicity]
    this.identefier = undefined
    this.active = true
    this.name = name
    this.telecom = telecom
    this.gender = gender
    this.birthDate = birthDate
    this.address = undefined
    this.maritalStatus = undefined
    this.communication = undefined
    this.careProvider = undefined
  }
}
