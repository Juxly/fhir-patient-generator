
export default class TelecomModel {
  constructor (system, value, use) {
    this.system = system
    this.value = value
    this.use = use
    this.period = {start: (new Date()).toISOString()}
  }
}
