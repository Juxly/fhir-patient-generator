
export default class ConditionModel {
  constructor (id, patient, condition, encounter = undefined, asserter = undefined) {
    this.fullUrl = 'http://localhost:3000/api/Condition/' + id
    this.resource = {
      resourceType: 'Condition',
      id: id,
      meta: undefined,
      patient: {
        reference: 'Patient/' + patient.id,
        display: patient.name.text
      },
      encounter: encounter,
      asserter: asserter,
      dateRecorded: undefined,
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/icd-10-cm',
            code: condition.code,
            display: condition.display,
            userSelected: false
          }
        ],
        text: condition.display
      },
      category: {
        coding: [
          {
            system: 'http://hl7.org/fhir/condition-category',
            code: 'diagnosis',
            display: 'Diagnosis'
          }
        ],
        text: 'Diagnosis'
      },
      clinicalStatus: 'active',
      verificationStatus: 'confirmed',
      onsetDateTime: undefined
    }
  }
}
