
export default class AddressModel {
  constructor (use, line, city, district, state, postalCode, country) {
    this.use = use
    this.text = line.join('/n') + '/n' + city + ', ' + state + ' ' + postalCode + '/n' + country
    this.line = line
    this.city = city
    this.district = district
    this.state = state
    this.postalCode = postalCode
    this.country = country
    this.period = {start: (new Date()).toISOString()}
  }
}
