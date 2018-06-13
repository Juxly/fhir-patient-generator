
export default function generateId (min = Math.pow(10, 9), max = Math.pow(10, 10)) {
  return Math.floor(Math.random() * (max - min) + min).toString()
}
