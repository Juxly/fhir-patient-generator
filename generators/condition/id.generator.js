import faker from 'faker'

export default function generateId () {
  var template = 'c########'
  return template.replace(/[a-z]/g, randomChar).replace(/#/g, randomNumeric)
}

function randomChar () {
  return faker.random.arrayElement('abcdefghijklmnopqrstuvwxyz')
}

function randomNumeric () {
  return faker.random.arrayElement('0123456789')
}
