import generateId from './id.generator'
import generateRace from './race.generator'
import generateEthnicity from './ethnicity.generator'
import generateName from './name.generator'
import generateTelecom from './telecom.generator'
import generateGender from './gender.generator'
import generateBirthDate from './birthDate.generator'
import generateAddress from './address.generator'
import generateCommunication from './communication.generator'
import generateMaritalStatus from './maritalStatus.generator'
import generateMRN from './mrn.generator'

import Model from '../../models/patient/patient.model'

export default function generatePatient () {
  var id = generateId()
  var race = generateRace()
  var ethnicity = generateEthnicity()
  var mrn = generateMRN(id)
  var gender = generateGender()
  var name = generateName(gender)
  var telecom = generateTelecom(name)
  var birthDate = generateBirthDate()
  var address = generateAddress()
  var maritalStatus = generateMaritalStatus()
  var communication = generateCommunication()
  return new Model(id, race, ethnicity, mrn, name, telecom, gender.text, birthDate, address, maritalStatus, communication)
}
