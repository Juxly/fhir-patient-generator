
export default class PatientModel {
  constructor (id, race, ethnicity, mrn, name, telecom, gender, birthDate, address, maritalStatus, communication, extensions = [], identifiers = []) {
    this.resourceType = 'Patient'
    this.id = id
    this.extension = [race, ethnicity]
    this.extension.concat(extensions)
    this.identefier = [mrn]
    this.identefier.concat(identifiers)
    this.active = true
    this.name = name
    this.telecom = telecom
    this.gender = gender
    this.birthDate = birthDate
    this.address = address
    this.maritalStatus = maritalStatus
    this.communication = communication
    this.careProvider = [
      {
        reference: 'Practitioner/123456789',
        display: 'Fisher, Burton'
      }
    ]
  }
}
