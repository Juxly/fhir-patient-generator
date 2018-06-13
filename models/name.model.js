
export default class NameModel {
  constructor (firstName, lastName) {
    this.use = 'official'
    this.text = (lastName + ', ' + firstName)
    this.family = [lastName]
    this.given = [firstName]
    this.period = {start: '2016-06-22T20:25:58.000Z'}
  }
}
