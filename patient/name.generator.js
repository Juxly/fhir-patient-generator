import Model from '../models/name.model'
import faker from 'faker'

export default function generateName (gender) {
  var firstName = faker.name.firstName(gender.code)
  var lastName = faker.name.lastName()
  return new Model(firstName, lastName)
}
