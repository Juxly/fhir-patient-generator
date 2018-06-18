
export default class EthnicityModel {
  constructor (ethnicity) {
    this.url = 'http://fhir.org/guides/argonaut/StructureDefinition/argo-ethnicity'
    this.extension = [{
      url: 'obmCategory',
      valueCoding: {
        system: 'http://hl7.org/fhir/v3/Ethnicity',
        code: ethnicity.code,
        display: ethnicity.display,
        userSelected: false
      }
    },
    {
      url: 'text',
      valueString: ethnicity.display

    }]
  }
}
