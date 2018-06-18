import generateId from '../patient/id.generator'
import generateRace from '../patient/race.generator'
import generateEthnicity from '../patient/ethnicity.generator'
import generateName from '../patient/name.generator'
import generateTelecom from '../patient/telecom.generator'
import generateGender from '../patient/gender.generator'
import generateBirthDate from '../patient/birthDate.generator'
import generateAddress from '../patient/address.generator'
import generateCommunication from '../patient/communication.generator'
import generateMaritalStatus from '../patient/maritalStatus.generator'

import Model from '../models/patient.model'

export default function generatePatient () {
  var id = generateId()
  var race = generateRace()
  var ethnicity = generateEthnicity()
  var gender = generateGender()
  var name = generateName(gender)
  var telecom = generateTelecom(name)
  var birthDate = generateBirthDate()
  var address = generateAddress()
  var maritalStatus = generateMaritalStatus()
  var communication = generateCommunication()
  return new Model(id, race, ethnicity, name, telecom, gender.text, birthDate, address, maritalStatus, communication)
}
