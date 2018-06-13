
export default class RaceModel {
  constructor (race) {
    this.url = 'http://fhir.org/guides/argonaut/StructureDefinition/argo-race'
    this.extension = [{
      url: 'obmCategory',
      valueCoding: {
        system: 'http://hl7.org/fhir/v3/Race',
        code: race.code,
        display: race.display,
        userSelected: false
      }
    },
    {
      url: 'text',
      valueString: race.display

    }]
  }
}
