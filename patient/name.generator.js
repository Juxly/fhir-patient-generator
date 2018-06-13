import Model from '../models/name.model'
import faker from 'faker'

export default function generateName () {
  var firstName = faker.name.firstName()
  var lastName = faker.name.lastName()
  return new Model(firstName, lastName)
}
