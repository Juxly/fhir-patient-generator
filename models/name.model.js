
export default class NameModel {
  constructor (firstName, lastName) {
    this.use = 'official'
    this.text = (lastName + ', ' + firstName)
    this.family = [lastName]
    this.given = [firstName]
    this.period = {start: (new Date()).toISOString()}
  }
}
