import rwc from '../helpers/randomWeightedChoice'
import Model from '../models/communication.model'
import languages from '../enumerations/languages'

export default function generateCommunication () {
  var language = rwc(languages)
  var preferred = true
  return new Model(language, preferred)
}
