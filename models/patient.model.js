
export default class PatientModel {
  constructor (id, race, ethnicity, name, telecom, gender, birthDate, address, communication) {
    this.resourceType = 'Patient'
    this.id = id
    this.extension = [race, ethnicity]
    this.identefier = undefined
    this.active = true
    this.name = name
    this.telecom = telecom
    this.gender = gender
    this.birthDate = birthDate
    this.address = address
    this.maritalStatus = undefined
    this.communication = communication
    this.careProvider = undefined
  }
}
