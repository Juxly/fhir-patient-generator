import genders from '../../enumerations/genders'
import faker from 'faker'

export default function generateGender () {
  return faker.random.arrayElement(genders)
}
