import rwc from '../helpers/randomWeightedChoice'
import genders from '../enumerations/genders'

export default function generateGender () {
  return rwc(genders)
}
