import fs from 'fs'

export default function savePatient (patient) {
  var dir = ['.', 'output', patient.id].join('/')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync(dir + '/patient.json', JSON.stringify(patient))
  console.log(`Patient written to: ${dir}/patient.json`)
}
