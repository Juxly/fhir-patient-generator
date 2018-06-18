
export default class ConditionModel {
  constructor (id, patient) {
    this.fullUrl = 'http://localhost:3000/api/Condition/' + id
    this.resource = {
      resourceType: 'Condition',
      id: id,
      meta: undefined,
      patient: {
        reference: 'Patient/' + patient.id,
        display: patient.name.text
      },
      encounter: undefined,
      asserter: undefined,
      dateRecorded: undefined,
      code: undefined,
      category: undefined,
      clinicalStatus: undefined,
      verificationStatus: undefined,
      onsetDateTime: undefined
    }
  }
}

/*{
  "fullUrl": "http://localhost:3000/api/Condition/d36634557",
  "resource": {
  "resourceType": "Condition",
  "id": "d36634557",
  "meta": {
    "versionId": "36634557",
    "lastUpdated": "2017-05-18T21:54:12.000Z"
  },
  "patient": {
    "reference": "Patient/5566778899",
    "display": "FISHER, FLYNNE"
  },
  "encounter": {
    "reference": "Encounter/123456789"
  },
  "asserter": {
    "reference": "Practitioner/987654321",
    "display": "JUXLY, JUXLY"
  },
  "dateRecorded": "2017-05-18",
  "code": {
    "coding": [
    {
      "system": "http://hl7.org/fhir/sid/icd-10-cm",
      "code": "I71.4",
      "display": "Abdominal aortic aneurysm, without rupture",
      "userSelected": false
    }
    ],
    "text": "Abdominal aortic aneurysm, without rupture"
  },
  "category": {
    "coding": [
    {
      "system": "http://hl7.org/fhir/condition-category",
      "code": "diagnosis",
      "display": "Diagnosis"
    }
    ],
    "text": "Diagnosis"
  },
  "clinicalStatus": "active",
  "verificationStatus": "confirmed",
  "onsetDateTime": "2017-05-18T05:00:00.000Z"
  }
}*/
