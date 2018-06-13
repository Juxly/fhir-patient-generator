import generateId from '../patient/id.generator'
import generateRace from '../patient/race.generator'
import generateEthnicity from '../patient/ethnicity.generator'
import generateName from '../patient/name.generator'
import generateTelecom from '../patient/telecom.generator'

import Model from '../models/patient.model'

export default function generatePatient () {
  var id = generateId()
  var race = generateRace()
  var ethnicity = generateEthnicity()
  var name = generateName()
  var telecom = generateTelecom(name)
  return new Model(id, race, ethnicity, name, telecom)
}
