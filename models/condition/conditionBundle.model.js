
export default class ConditionBundleModel {
  constructor (id, patient, conditions) {
    this.resourceType = 'Bundle'
    this.id = id
    this.type = 'searchset'
    this.total = conditions.length
    this.link = [
      {
        relation: 'self',
        url: 'http://localhost:3000/api/Condition?patient=' + patient.id
      }
    ]
    this.entry = conditions
  }
}
