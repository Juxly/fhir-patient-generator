import IdentifierModel from './identifier.model'

export default class MRNModel extends IdentifierModel {
  constructor (id) {
    super()
    this.type = {
      coding: [
        {
          system: 'http://hl7.org/fhir/v2/0203',
          code: 'MR',
          display: 'Medical record number',
          userSelected: false
        }
      ],
      text: 'MRN'
    }
    this.system = 'urn:oid:1.1.1.1.1.1'
    this.value = id
  }
}
