import Model from '../models/patient/address.model'
import faker from 'faker'

export default function generateAddress () {
  var line = [faker.address.streetAddress()]
  var city = faker.address.city()
  var state = faker.address.stateAbbr()
  var postalCode = faker.address.zipCode('#####')
  return new Model('home', line, city, '', state, postalCode, 'USA')
}
