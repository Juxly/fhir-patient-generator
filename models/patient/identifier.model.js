
export default class IdentifierModel {
  constructor () {
    this.use = 'usual'
    this.type = undefined
    this.system = undefined
    this.value = undefined
    this.period = {start: (new Date()).toISOString()}
  }
}
