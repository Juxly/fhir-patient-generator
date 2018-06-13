import generatePatient from './patient/patient.generator'
import faker from './lib/faker'

console.log('this script generates patients\n')
console.log(generatePatient())

for (var i = 0; i < 10; i++) {
  console.log(faker.name.firstName(0))
}
