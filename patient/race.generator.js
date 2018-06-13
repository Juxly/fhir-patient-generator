import rwc from '../helpers/randomWeightedChoice'
import races from '../enumerations/races'
import Model from '../models/race.model'

export default function generateRace () {
  var race = rwc(races)
  return new Model(race)
}
