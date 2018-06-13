import generateId from '../patient/id.generator'
import generateRace from '../patient/race.generator'
import generateEthnicity from '../patient/ethnicity.generator'
import generateGender from '../patient/gender.generator'
import generateName from '../patient/name.generator'
import generateTelecom from '../patient/telecom.generator'

import Model from '../models/patient.model'

export default function generatePatient () {
  var id = generateId()
  var race = generateRace()
  var ethnicity = generateEthnicity()
  var gender = generateGender()
  var name = generateName(gender)
  var telecom = generateTelecom(name)
  return new Model(id, race, ethnicity, gender.text, name, telecom)
}
