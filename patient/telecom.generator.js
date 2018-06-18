import Model from '../models/patient/telecom.model'
import faker from 'faker'

export default function generateTelecom (name) {
  var firstName = name.family[0]
  var lastName = name.given[0]
  var homePhone = new Model('phone', faker.phone.phoneNumber('##########'), 'home')
  var mobilePhone = new Model('phone', faker.phone.phoneNumber('##########'), 'mobile')
  var workPhone = new Model('phone', faker.phone.phoneNumber('##########'), 'work')
  var email = new Model('email', faker.internet.email(firstName, lastName))
  return [homePhone, mobilePhone, workPhone, email]
}
