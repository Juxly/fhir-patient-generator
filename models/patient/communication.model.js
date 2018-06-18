
export default class CommunicationModel {
  constructor (language, preferred) {
    this.language = {
      coding: [{
        system: 'urn:ietf:bcp:47',
        code: language.code,
        display: language.display,
        userSelected: false
      }],
      text: language.display
    }
    this.preferred = preferred
  }
}
