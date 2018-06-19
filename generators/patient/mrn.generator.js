import MRNModel from '../../models/patient/mrn.model'

export default function generateMRN (id) {
  return new MRNModel(id)
}
