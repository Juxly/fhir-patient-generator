
export default class MaritalStatusModel {
  constructor (maritalStatus) {
    this.coding = [
      {
        system: 'http://hl7.org/fhir/v3/MaritalStatus',
        code: maritalStatus.code,
        display: maritalStatus.display,
        userSelected: false
      }
    ]
    this.text = maritalStatus.display
  }
}
